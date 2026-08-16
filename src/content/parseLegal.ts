export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'list'; items: string[] };

export type ParsedLegalSection = {
  id: string;
  heading: string;
  blocks: LegalBlock[];
};

function slugify(value: string, index: number): string {
  const slug = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return slug || `section-${index + 1}`;
}

export function extractIntro(raw: string): { intro: string; body: string } {
  const lines = raw.replace(/\r\n/g, '\n').split('\n');
  const splitIndex = lines.findIndex((line) => {
    const trimmed = line.trim();
    return /^\d+\.\s+[A-Za-z]/.test(trimmed) && !/^\d+\.\d+/.test(trimmed);
  });

  if (splitIndex === -1) {
    return { intro: raw.trim(), body: '' };
  }

  if (splitIndex === 0) {
    return { intro: '', body: raw };
  }

  return {
    intro: lines.slice(0, splitIndex).join('\n').trim(),
    body: lines.slice(splitIndex).join('\n'),
  };
}

export function parseLegalBody(raw: string): ParsedLegalSection[] {
  const lines = raw.replace(/\r\n/g, '\n').split('\n');
  const sections: ParsedLegalSection[] = [];
  let current: ParsedLegalSection | null = null;
  let paragraph: string[] = [];
  let listItems: string[] = [];

  const flushParagraph = () => {
    if (!current || paragraph.length === 0) return;
    current.blocks.push({ type: 'p', text: paragraph.join(' ').trim() });
    paragraph = [];
  };

  const flushList = () => {
    if (!current || listItems.length === 0) return;
    current.blocks.push({ type: 'list', items: [...listItems] });
    listItems = [];
  };

  const flush = () => {
    flushList();
    flushParagraph();
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flush();
      continue;
    }

    const sectionMatch = line.match(/^(\d+)\.\s+(.+)$/);
    const subMatch = line.match(/^(\d+\.\d+)\s+(.+)$/);

    if (sectionMatch && !subMatch && /^[A-Z0-9]/.test(sectionMatch[2])) {
      flush();
      current = {
        id: slugify(line, sections.length),
        heading: line,
        blocks: [],
      };
      sections.push(current);
      continue;
    }

    if (!current) continue;

    if (subMatch) {
      flush();
      current.blocks.push({ type: 'h3', text: line });
      continue;
    }

    if (line.startsWith('•') || line.startsWith('- ') || line.startsWith('* ') || /^[A-Z]\.\s+/.test(line)) {
      flushParagraph();
      listItems.push(line.replace(/^[•*-]\s*/, '').trim());
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flush();
  return sections;
}
