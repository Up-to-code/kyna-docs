import React, {useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';

const INSTALL_COMMAND = 'npm install --global @kyna-language/cli@preview';

const FIRST_PROGRAM = `fn greet(name: str): str {
    return "Hello, " + name;
}

const language = "Kyna";
print(greet(language));`;

const LEARNING_PATHS = [
  {
    title: 'Install and run',
    description: 'Install the CLI, create a project, and run your first Kyna program.',
    label: 'Getting started',
    to: '/docs/tutorial/getting-started',
  },
  {
    title: 'Learn the language',
    description: 'Work through bindings, types, functions, modules, classes, and errors.',
    label: 'Language tour',
    to: '/docs/tutorial/tour',
  },
  {
    title: 'Find exact behavior',
    description: 'Use the reference for syntax, semantics, networking, and async behavior.',
    label: 'Language reference',
    to: '/docs/reference/bindings',
  },
  {
    title: 'Build with the library',
    description: 'Explore text, collections, files, formats, system tools, and timing APIs.',
    label: 'Standard library',
    to: '/docs/stdlib/text',
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyInstallCommand = async () => {
    await navigator.clipboard.writeText(INSTALL_COMMAND);
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
              <Link to="/docs/tutorial/tour" className="kyna-btn kyna-btn--secondary">
                Language tour
              </Link>
              <a
                href="https://github.com/Up-to-code/Kyna"
                target="_blank"
                rel="noreferrer"
                className="kyna-btn kyna-btn--ghost"
              >
                GitHub
              </a>
            </div>

            <div className="kyna-copybar">
              <span className="kyna-copybar__prefix">$</span>
              <span className="kyna-copybar__cmd">{INSTALL_COMMAND}</span>
              <button
                type="button"
                className="kyna-copybar__btn"
                onClick={copyInstallCommand}
                aria-label="Copy npm installation command"
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
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
