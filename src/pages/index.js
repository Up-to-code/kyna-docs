import React, {useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';

const INSTALLERS = [
  {
    id: 'npm',
    label: 'npm',
    command: 'npm install --global @kyna-language/cli@preview',
    note: 'Recommended. Requires Node.js 18 or newer.',
  },
  {
    id: 'bun',
    label: 'Bun',
    command: 'bun add --global --trust @kyna-language/cli@preview',
    note: 'The trust flag allows the checksum-verified native installation step.',
  },
  {
    id: 'curl',
    label: 'curl',
    command:
      'curl -fsSL https://github.com/Up-to-code/Kyna/releases/download/v1.0.0-preview.3/install.sh | sh -s -- --channel preview --version 1.0.0-preview.3',
    note: 'Direct installer for macOS and Linux. Node.js is not required.',
  },
  {
    id: 'powershell',
    label: 'PowerShell',
    command:
      "& ([scriptblock]::Create((irm 'https://github.com/Up-to-code/Kyna/releases/download/v1.0.0-preview.3/install.ps1'))) -Channel preview -Version 1.0.0-preview.3",
    note: 'Direct installer for Windows x64. Node.js is not required.',
  },
];

const FIRST_PROGRAM = `fn greet(name: str): str {
    return "Hello, " + name;
}

const language = "Kyna";
print(greet(language));`;

const LEARNING_PATHS = [
  {
    number: '01',
    title: 'Install and run',
    description: 'Install the CLI, create a project, and run your first Kyna program.',
    label: 'Getting started',
    to: '/docs/tutorial/getting-started',
  },
  {
    number: '02',
    title: 'Learn the language',
    description: 'Work through bindings, types, functions, modules, classes, and errors.',
    label: 'Language tour',
    to: '/docs/tutorial/tour',
  },
  {
    number: '03',
    title: 'Find exact behavior',
    description: 'Use the reference for syntax, semantics, networking, and async behavior.',
    label: 'Language reference',
    to: '/docs/reference/bindings',
  },
  {
    number: '04',
    title: 'Build with the library',
    description: 'Explore text, collections, files, formats, system tools, and timing APIs.',
    label: 'Standard library',
    to: '/docs/stdlib/text',
  },
];

export default function Home() {
  const [activeInstaller, setActiveInstaller] = useState(0);
  const [copied, setCopied] = useState(false);
  const installer = INSTALLERS[activeInstaller];

  const copyInstallCommand = async () => {
    await navigator.clipboard.writeText(installer.command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout
      title="Kyna programming language"
      description="Learn Kyna, a statically typed language with an inspectable compiler and native CLI."
    >
      <div className="kyna-landing">
        <section className="kyna-hero">
          <div className="kyna-hero__container">
            <span className="kyna-section-kicker">Kyna programming language</span>
            <h1 className="kyna-hero__title">Readable code. Explicit types. One practical CLI.</h1>
            <p className="kyna-hero__subtitle">
              Learn the language, run examples, and inspect every compiler stage—from source
              tokens to HIR, MIR, bytecode, and the virtual machine.
            </p>

            <div className="kyna-hero__actions">
              <Link to="/docs/tutorial/getting-started" className="kyna-btn kyna-btn--primary">
                Get started
              </Link>
              <a
                href="https://github.com/Up-to-code/Kyna"
                target="_blank"
                rel="noreferrer"
                className="kyna-btn kyna-btn--secondary"
              >
                <svg className="kyna-btn__icon" aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49v-1.9c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.36-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0 1 12 6.8c.85 0 1.71.12 2.5.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.93-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9v2.97c0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
                </svg>
                GitHub
              </a>
            </div>

            <div className="kyna-install-picker">
              <div className="kyna-install-picker__tabs" role="tablist" aria-label="Install Kyna">
                {INSTALLERS.map((option, index) => (
                  <button
                    key={option.id}
                    type="button"
                    role="tab"
                    aria-selected={activeInstaller === index}
                    className={`kyna-tab-btn ${activeInstaller === index ? 'kyna-tab-btn--active' : ''}`}
                    onClick={() => {
                      setActiveInstaller(index);
                      setCopied(false);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <div className="kyna-copybar">
                <span className="kyna-copybar__prefix">$</span>
                <span className="kyna-copybar__cmd">{installer.command}</span>
                <button
                  type="button"
                  className="kyna-copybar__btn"
                  onClick={copyInstallCommand}
                  aria-label={`Copy ${installer.label} installation command`}
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <p className="kyna-install-picker__note">{installer.note}</p>
            </div>
          </div>
        </section>

        <section className="kyna-bento-section">
          <div className="kyna-bento__container">
            <div className="kyna-section-header">
              <span className="kyna-section-kicker">Documentation</span>
              <h2 className="kyna-section-title">Choose a clear path</h2>
              <p className="kyna-section-desc">
                Start with a guided lesson, or go directly to the reference you need.
              </p>
            </div>

            <div className="kyna-bento-grid">
              {LEARNING_PATHS.map((path) => (
                <article className="kyna-bento-card" key={path.to}>
                  <span className="kyna-bento-card__number" aria-hidden="true">{path.number}</span>
                  <h3 className="kyna-bento-card__title">{path.title}</h3>
                  <p className="kyna-bento-card__desc">{path.description}</p>
                  <Link to={path.to}>{path.label} →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="kyna-playground-section">
          <div className="kyna-playground__container">
            <div className="kyna-section-header">
              <span className="kyna-section-kicker">Language</span>
              <h2 className="kyna-section-title">Small syntax, visible behavior</h2>
              <p className="kyna-section-desc">
                Types can be inferred or written explicitly. State is mutable only when declared
                with <code>var</code>; <code>const</code> bindings stay immutable.
              </p>
            </div>

            <div className="kyna-interactive-card">
              <div className="kyna-tab-bar">
                <div className="kyna-tab-bar__dots" aria-hidden="true">
                  <span className="dot dot--red" />
                  <span className="dot dot--yellow" />
                  <span className="dot dot--green" />
                </div>
                <span className="kyna-tab-btn kyna-tab-btn--active">hello.kyna</span>
                <span className="kyna-tab-bar__badge">Kyna</span>
              </div>

              <div className="kyna-interactive-card__body">
                <div className="kyna-interactive-card__editor">
                  <CodeBlock language="kyna">{FIRST_PROGRAM}</CodeBlock>
                </div>
                <div className="kyna-interactive-card__sidebar">
                  <span className="kyna-interactive-card__pill">First program</span>
                  <h3 className="kyna-interactive-card__heading">Run it with one command</h3>
                  <p className="kyna-interactive-card__text">
                    Save the example as <code>hello.kyna</code>, then run
                    <code> ky run hello.kyna</code>. Use <code>ky check</code> to type-check
                    without executing.
                  </p>
                  <Link to="/docs/tutorial/getting-started">Follow the tutorial →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="kyna-pillars-section">
          <div className="kyna-pillars__container">
            <article className="kyna-pillar-item">
              <div className="kyna-pillar-num">01</div>
              <h3 className="kyna-pillar-title">Check</h3>
              <p className="kyna-pillar-desc">
                Validate bindings, types, nullability, calls, and control flow before execution.
              </p>
            </article>
            <article className="kyna-pillar-item">
              <div className="kyna-pillar-num">02</div>
              <h3 className="kyna-pillar-title">Inspect</h3>
              <p className="kyna-pillar-desc">
                Print tokens, syntax trees, HIR, MIR, and bytecode directly from the CLI.
              </p>
            </article>
            <article className="kyna-pillar-item">
              <div className="kyna-pillar-num">03</div>
              <h3 className="kyna-pillar-title">Run</h3>
              <p className="kyna-pillar-desc">
                Execute scripts and projects through Kyna’s compiler and runtime pipeline.
              </p>
            </article>
          </div>
        </section>

        <section className="kyna-cta">
          <div className="kyna-cta__container">
            <h2 className="kyna-cta__title">Start with the first program</h2>
            <p className="kyna-cta__desc">
              Install the preview CLI, create a project, and learn each language feature in order.
            </p>
            <div className="kyna-cta__actions">
              <Link to="/docs/tutorial/getting-started" className="kyna-btn kyna-btn--primary">
                Open getting started
              </Link>
              <Link to="/docs/examples" className="kyna-btn kyna-btn--secondary">
                Browse examples
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
