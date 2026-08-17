import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const pages = [
  {
    source: 'WALKCHAMP_PRIVACY_POLICY.txt',
    output: 'public/walkchamp/privacy-policy/index.html',
    title: 'WalkChamp Privacy Policy',
    publicUrl: 'https://miragaming.com/walkchamp/privacy-policy',
  },
  {
    source: 'WALKCHAMP_TERMS_AND_CONDITIONS.txt',
    output: 'public/walkchamp/terms/index.html',
    title: 'WalkChamp Terms & Conditions',
    publicUrl: 'https://miragaming.com/walkchamp/terms',
  },
];

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function linkify(value) {
  return value.replace(
    /(https?:\/\/[^\s<]+|admin@miragaming\.com)/g,
    (match) => {
      const href = match.includes('@') ? `mailto:${match}` : match;
      return `<a href="${escapeHtml(href)}">${match}</a>`;
    },
  );
}

function parseDocument(raw) {
  const lines = raw.replace(/\r\n/g, '\n').split('\n');
  const firstSectionIndex = lines.findIndex((line) => /^1\.\s+/.test(line.trim()));
  const headerLines = firstSectionIndex >= 0 ? lines.slice(0, firstSectionIndex) : [];
  const bodyLines = firstSectionIndex >= 0 ? lines.slice(firstSectionIndex) : lines;
  const metadata = {};

  for (const line of headerLines) {
    const match = line.trim().match(/^([^:]+):\s+(.+)$/);
    if (match) {
      metadata[match[1].toLowerCase()] = match[2];
    }
  }

  return { metadata, bodyLines };
}

function renderBody(lines) {
  const html = [];
  let paragraph = [];
  let listItems = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${linkify(escapeHtml(paragraph.join(' ').trim()))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length) return;
    html.push(`<ul>${listItems.map((item) => `<li>${linkify(escapeHtml(item))}</li>`).join('')}</ul>`);
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
    const subSectionMatch = line.match(/^(\d+\.\d+)\s+(.+)$/);

    if (sectionMatch && !subSectionMatch) {
      flush();
      html.push(`<h2>${escapeHtml(line)}</h2>`);
      continue;
    }

    if (subSectionMatch) {
      flush();
      html.push(`<h3>${escapeHtml(line)}</h3>`);
      continue;
    }

    if (line.startsWith('•') || line.startsWith('- ') || line.startsWith('* ')) {
      flushParagraph();
      listItems.push(line.replace(/^[•*-]\s*/, '').trim());
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flush();
  return html.join('\n');
}

function renderPage({ title, publicUrl }, metadata, bodyHtml) {
  const lastUpdated = metadata['last updated'];
  const effectiveDate = metadata['effective date'];
  const version = metadata.version;
  const support = metadata.support || 'admin@miragaming.com';

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(title)} for WalkChamp by Mira Gaming." />
    <title>${escapeHtml(title)} | Mira Gaming</title>
    <style>
      :root {
        color-scheme: light;
        --bg: #f7f9fb;
        --ink: #17202a;
        --muted: #607080;
        --line: #d9e2ea;
        --accent: #0b7a75;
        --surface: #ffffff;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        background: var(--bg);
        color: var(--ink);
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        line-height: 1.65;
      }

      .topbar {
        border-bottom: 1px solid var(--line);
        background: rgba(255, 255, 255, 0.94);
      }

      .topbar-inner,
      main {
        width: min(1060px, calc(100% - 32px));
        margin: 0 auto;
      }

      .topbar-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        min-height: 72px;
      }

      .brand {
        color: var(--ink);
        font-size: 18px;
        font-weight: 800;
        letter-spacing: 0;
        text-decoration: none;
      }

      .home-link {
        color: var(--accent);
        font-size: 14px;
        font-weight: 700;
        text-decoration: none;
      }

      main {
        padding: 48px 0 72px;
      }

      header {
        border-bottom: 1px solid var(--line);
        margin-bottom: 34px;
        padding-bottom: 28px;
      }

      .kicker {
        color: var(--accent);
        font-size: 13px;
        font-weight: 800;
        letter-spacing: 0.08em;
        margin: 0 0 8px;
        text-transform: uppercase;
      }

      h1 {
        font-size: clamp(34px, 6vw, 58px);
        line-height: 1.05;
        margin: 0 0 22px;
      }

      .meta {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
        gap: 14px;
        margin: 0;
      }

      .meta div {
        background: var(--surface);
        border: 1px solid var(--line);
        border-radius: 8px;
        padding: 12px 14px;
      }

      dt {
        color: var(--muted);
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 0.08em;
        margin-bottom: 4px;
        text-transform: uppercase;
      }

      dd {
        margin: 0;
        overflow-wrap: anywhere;
      }

      article {
        background: var(--surface);
        border: 1px solid var(--line);
        border-radius: 8px;
        padding: clamp(22px, 4vw, 48px);
      }

      h2 {
        border-top: 1px solid var(--line);
        font-size: 24px;
        line-height: 1.25;
        margin: 34px 0 14px;
        padding-top: 26px;
      }

      h2:first-child {
        border-top: 0;
        margin-top: 0;
        padding-top: 0;
      }

      h3 {
        font-size: 18px;
        margin: 24px 0 8px;
      }

      p,
      ul {
        margin: 0 0 16px;
      }

      ul {
        padding-left: 24px;
      }

      li + li {
        margin-top: 6px;
      }

      a {
        color: var(--accent);
        font-weight: 700;
      }

      @media (max-width: 640px) {
        .topbar-inner {
          align-items: flex-start;
          flex-direction: column;
          justify-content: center;
          padding: 14px 0;
        }

        main {
          padding-top: 32px;
        }
      }
    </style>
  </head>
  <body>
    <nav class="topbar" aria-label="Main navigation">
      <div class="topbar-inner">
        <a class="brand" href="/">Mira Gaming</a>
        <a class="home-link" href="/">Back to main site</a>
      </div>
    </nav>
    <main>
      <header>
        <p class="kicker">WalkChamp Legal</p>
        <h1>${escapeHtml(title)}</h1>
        <dl class="meta">
          ${effectiveDate ? `<div><dt>Effective date</dt><dd>${escapeHtml(effectiveDate)}</dd></div>` : ''}
          ${lastUpdated ? `<div><dt>Last updated</dt><dd>${escapeHtml(lastUpdated)}</dd></div>` : ''}
          ${version ? `<div><dt>Version</dt><dd>${escapeHtml(version)}</dd></div>` : ''}
          <div><dt>Support</dt><dd><a href="mailto:${escapeHtml(support)}">${escapeHtml(support)}</a></dd></div>
          <div><dt>Public URL</dt><dd><a href="${escapeHtml(publicUrl)}">${escapeHtml(publicUrl)}</a></dd></div>
        </dl>
      </header>
      <article>
${bodyHtml}
      </article>
    </main>
  </body>
</html>
`;
}

for (const page of pages) {
  const sourcePath = path.join(rootDir, page.source);
  const outputPath = path.join(rootDir, page.output);
  const raw = await readFile(sourcePath, 'utf8');
  const { metadata, bodyLines } = parseDocument(raw);
  const html = renderPage(page, metadata, renderBody(bodyLines));

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
  console.log(`Generated ${page.output}`);
}
