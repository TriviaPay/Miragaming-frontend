import { type FC, type ReactNode, useEffect, useMemo } from 'react';
import type { LegalPageContent } from '../../content/legalPages';
import { LEGAL_PAGES } from '../../content/legalPages';
import { extractIntro, parseLegalBody } from '../../content/parseLegal';
import './LegalPage.css';

type LegalPageProps = {
  page: LegalPageContent;
};

function LinkedText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const pattern = /(https?:\/\/[^\s]+|admin@miragaming\.com)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const value = match[0];
    const href = value.includes('@') ? `mailto:${value}` : value;
    nodes.push(
      <a key={`link-${key++}`} href={href}>
        {value}
      </a>,
    );
    lastIndex = match.index + value.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
}

const LegalPage: FC<LegalPageProps> = ({ page }) => {
  const { intro, sections } = useMemo(() => {
    const split = extractIntro(page.body);
    return {
      intro: split.intro,
      sections: parseLegalBody(split.body),
    };
  }, [page.body]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page.path]);

  return (
    <main className="legal-page">
      <div className="container legal-layout">
        <header className="legal-header">
          <p className="legal-kicker">Mira Gaming Legal</p>
          <h1 className="legal-title">{page.title}</h1>
          <dl className="legal-meta-grid">
            {page.effectiveDate ? (
              <div>
                <dt>Effective date</dt>
                <dd>{page.effectiveDate}</dd>
              </div>
            ) : null}
            <div>
              <dt>Last updated</dt>
              <dd>{page.lastUpdated}</dd>
            </div>
            {page.version ? (
              <div>
                <dt>Version</dt>
                <dd>{page.version}</dd>
              </div>
            ) : null}
            {page.support ? (
              <div>
                <dt>Support</dt>
                <dd>
                  <a href={`mailto:${page.support}`}>{page.support}</a>
                </dd>
              </div>
            ) : null}
            {page.publicUrl ? (
              <div>
                <dt>Public URL</dt>
                <dd>
                  <a href={page.publicUrl} target="_blank" rel="noopener noreferrer">
                    {page.publicUrl}
                  </a>
                </dd>
              </div>
            ) : null}
          </dl>
        </header>

        <div className={`legal-body-wrap${sections.length ? '' : ' legal-body-wrap-plain'}`}>
          {sections.length ? (
            <nav className="legal-toc" aria-label="On this page">
              <p className="legal-toc-title">On this page</p>
              <ol>
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.heading}</a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <article className="legal-article">
            {intro
              ? intro.split(/\n\n+/).map((paragraph) => (
                  <p key={paragraph} className="legal-intro">
                    <LinkedText text={paragraph} />
                  </p>
                ))
              : null}

            {sections.map((section) => (
              <section key={section.id} id={section.id} className="legal-section">
                <h2>{section.heading}</h2>
                {section.blocks.map((block, index) => {
                  if (block.type === 'h3') {
                    return <h3 key={`${section.id}-h3-${index}`}>{block.text}</h3>;
                  }
                  if (block.type === 'list') {
                    return (
                      <ul key={`${section.id}-list-${index}`}>
                        {block.items.map((item) => (
                          <li key={item}>
                            <LinkedText text={item} />
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={`${section.id}-p-${index}`}>
                      <LinkedText text={block.text} />
                    </p>
                  );
                })}
              </section>
            ))}

            <nav className="legal-page-nav" aria-label="Other legal pages">
              {LEGAL_PAGES.filter((item) => item.path !== page.path).map((item) => (
                <a key={item.path} href={item.path}>
                  {item.navLabel}
                </a>
              ))}
            </nav>
            <p className="legal-back">
              <a href="/">Back to homepage</a>
            </p>
          </article>
        </div>
      </div>
    </main>
  );
};

export default LegalPage;
