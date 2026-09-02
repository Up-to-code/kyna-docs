import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';

const SAFETY_CODE = `fn findUser(id: int): str? {
    if (id <= 0) {
        return null; # Explicit nullability
    }
    return "User_" + id;
}

var user: str? = findUser(42);
if (user != null) {
    # Type automatically narrows to 'str'
    print("Active profile:", user);
}`;

const CLI_CODE = `# Execute a script on the Bytecode VM
$ ky run server.kyna

# Run static type checks & diagnostics
$ ky check server.kyna

# Inspect compiler intermediate representations
$ ky hir server.kyna
$ ky bytecode server.kyna`;

const FETCH_CODE = `async fn fetchTelemetry(service: str): str {
    try {
        const res = await fetch("https://api.kyna.dev/health/" + service);
        const data = jsonParse(res);
        return "Status: " + data["status"] + " | QPS: " + data["qps"];
    } catch (err) {
        return "Error: " + err;
    }
}

const status = await fetchTelemetry("auth");
print(status);`;

const STDLIB_CODE = `import std.fs;
import std.time;

# High-resolution benchmark timer
const start = time.nowNs();

# Safe file system access
const raw = fs.readString("config.json");
const config = jsonParse(raw);

const elapsed = (time.nowNs() - start) / 1000000;
print("Loaded in:", elapsed, "ms");`;

export default function Home() {
  const [copied, setCopied] = useState(false);
  const quickstartCmd = 'git clone https://github.com/Up-to-code/Kyma && cmake --build build-debug';

  const handleCopy = () => {
    navigator.clipboard.writeText(quickstartCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout
      title="Kyna — A fast, statically typed language"
      description="Kyna is a modern, statically typed language compiled to bytecode, engineered for backend services and safe scripting."
    >
      <div className="kyna-landing">
        {/* Left-Aligned Premium Hero Section */}
        <section className="kyna-hero">
          <div className="kyna-hero__container">
            
            <div className="kyna-hero__badge">
              <span className="kyna-hero__badge-dot"></span>
              <span>Fast, Statically Typed Bytecode Language</span>
            </div>

            <h1 className="kyna-hero__title">
              Engineered for safe, <br />
              high-performance systems.
            </h1>

            <p className="kyna-hero__subtitle">
              Kyna delivers modern type safety, zero runtime null crashes, native non-blocking async I/O, 
              and transparent multi-stage compiler diagnostics running on an optimized bytecode VM.
            </p>

            <div className="kyna-hero__actions">
              <Link to="/docs/intro" className="kyna-btn kyna-btn--primary">
                Read Documentation
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Link>
              <Link to="/docs/tutorial/getting-started" className="kyna-btn kyna-btn--secondary">
                Quickstart Tutorial
              </Link>
              <a
                href="https://github.com/Up-to-code/Kyma"
                target="_blank"
                rel="noreferrer"
                className="kyna-btn kyna-btn--ghost"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>

            {/* Minimalist Copy Bar */}
            <div className="kyna-copybar">
              <span className="kyna-copybar__prefix">$</span>
              <span className="kyna-copybar__cmd">{quickstartCmd}</span>
              <button type="button" className="kyna-copybar__btn" onClick={handleCopy}>
                {copied ? (
                  <span className="kyna-copybar__copied">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Copied
                  </span>
                ) : (
                  <span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    Copy
                  </span>
                )}
              </button>
            </div>

          </div>
        </section>

        {/* Feature Cards Showcase */}
        <section className="kyna-showcase">
          <div className="kyna-showcase__container">
            
            {/* Feature Card 1 */}
            <div className="kyna-card">
              <div className="kyna-card__content">
                <div className="kyna-card__header-tag">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <span>Type System</span>
                </div>
                <h3 className="kyna-card__title">Compile-Time Safety & Explicit Nullability</h3>
                <p className="kyna-card__desc">
                  Catch type mismatches, unbound variables, and null reference bugs before code executes. Standard types cannot hold <code>null</code>. Use <code>T?</code> for optional values, with automatic flow-sensitive type narrowing.
                </p>
                <div className="kyna-card__points">
                  <div className="kyna-point">
                    <span className="kyna-point__check">✓</span>
                    <span>Non-nullable types by default (<code>str</code>, <code>int</code>, <code>bool</code>)</span>
                  </div>
                  <div className="kyna-point">
                    <span className="kyna-point__check">✓</span>
                    <span>Explicit nullable annotations (<code>T?</code>) with auto-narrowing</span>
                  </div>
                  <div className="kyna-point">
                    <span className="kyna-point__check">✓</span>
                    <span>Zero unhandled runtime null-pointer crashes</span>
                  </div>
                </div>
              </div>

              <div className="kyna-card__code">
                <div className="kyna-editor-window">
                  <div className="kyna-editor-window__header">
                    <div className="kyna-editor-window__dots">
                      <span className="dot dot--red"></span>
                      <span className="dot dot--yellow"></span>
                      <span className="dot dot--green"></span>
                    </div>
                    <span className="kyna-editor-window__file">safety.kyna</span>
                    <span className="kyna-editor-window__badge">kyna</span>
                  </div>
                  <div className="kyna-editor-window__body">
                    <CodeBlock language="kyna">
                      {SAFETY_CODE}
                    </CodeBlock>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="kyna-card kyna-card--reverse">
              <div className="kyna-card__content">
                <div className="kyna-card__header-tag">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 17 10 11 4 5"></polyline>
                    <line x1="12" y1="19" x2="20" y2="19"></line>
                  </svg>
                  <span>Developer Tooling</span>
                </div>
                <h3 className="kyna-card__title">Built-in CLI & Multi-Stage Diagnostics</h3>
                <p className="kyna-card__desc">
                  The unified <code>ky</code> CLI gives you instant compiler feedback. Run static checks without executing, and inspect intermediate compiler representations (Tokens, AST, HIR, MIR, Bytecode) on demand.
                </p>
                <div className="kyna-card__points">
                  <div className="kyna-point">
                    <span className="kyna-point__check">✓</span>
                    <span><code>ky check</code> for fast diagnostic verification</span>
                  </div>
                  <div className="kyna-point">
                    <span className="kyna-point__check">✓</span>
                    <span>Precise compiler diagnostics pointing to line and column</span>
                  </div>
                  <div className="kyna-point">
                    <span className="kyna-point__check">✓</span>
                    <span>Transparent inspection into HIR, MIR, and Bytecode</span>
                  </div>
                </div>
              </div>

              <div className="kyna-card__code">
                <div className="kyna-editor-window">
                  <div className="kyna-editor-window__header">
                    <div className="kyna-editor-window__dots">
                      <span className="dot dot--red"></span>
                      <span className="dot dot--yellow"></span>
                      <span className="dot dot--green"></span>
                    </div>
                    <span className="kyna-editor-window__file">terminal</span>
                    <span className="kyna-editor-window__badge">bash</span>
                  </div>
                  <div className="kyna-editor-window__body">
                    <CodeBlock language="bash">
                      {CLI_CODE}
                    </CodeBlock>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="kyna-card">
              <div className="kyna-card__content">
                <div className="kyna-card__header-tag">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                  <span>Concurrency</span>
                </div>
                <h3 className="kyna-card__title">Native Async Runtime & HTTP Fetch</h3>
                <p className="kyna-card__desc">
                  Asynchronous I/O is built directly into the language runtime. Perform non-blocking network calls, process JSON payloads, and handle asynchronous results seamlessly with <code>async</code> and <code>await</code>.
                </p>
                <div className="kyna-card__points">
                  <div className="kyna-point">
                    <span className="kyna-point__check">✓</span>
                    <span>First-class <code>async fn</code> and <code>await</code> expressions</span>
                  </div>
                  <div className="kyna-point">
                    <span className="kyna-point__check">✓</span>
                    <span>Built-in <code>fetch()</code> API with custom headers and methods</span>
                  </div>
                  <div className="kyna-point">
                    <span className="kyna-point__check">✓</span>
                    <span>Native high-speed JSON encoding and decoding</span>
                  </div>
                </div>
              </div>

              <div className="kyna-card__code">
                <div className="kyna-editor-window">
                  <div className="kyna-editor-window__header">
                    <div className="kyna-editor-window__dots">
                      <span className="dot dot--red"></span>
                      <span className="dot dot--yellow"></span>
                      <span className="dot dot--green"></span>
                    </div>
                    <span className="kyna-editor-window__file">fetch.kyna</span>
                    <span className="kyna-editor-window__badge">kyna</span>
                  </div>
                  <div className="kyna-editor-window__body">
                    <CodeBlock language="kyna">
                      {FETCH_CODE}
                    </CodeBlock>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Card 4 */}
            <div className="kyna-card kyna-card--reverse">
              <div className="kyna-card__content">
                <div className="kyna-card__header-tag">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                  <span>Standard Library</span>
                </div>
                <h3 className="kyna-card__title">Zero-Dependency Standard Library</h3>
                <p className="kyna-card__desc">
                  Write robust scripts and backend services without pulling in hundreds of third-party packages. Kyna includes rich native modules for file operations, high-resolution timers, collections, and formats.
                </p>
                <div className="kyna-card__points">
                  <div className="kyna-point">
                    <span className="kyna-point__check">✓</span>
                    <span><code>std.fs</code> for robust filesystem read/write operations</span>
                  </div>
                  <div className="kyna-point">
                    <span className="kyna-point__check">✓</span>
                    <span><code>std.time</code> for nanosecond-precision execution metrics</span>
                  </div>
                  <div className="kyna-point">
                    <span className="kyna-point__check">✓</span>
                    <span>Built-in formatters and string utilities</span>
                  </div>
                </div>
              </div>

              <div className="kyna-card__code">
                <div className="kyna-editor-window">
                  <div className="kyna-editor-window__header">
                    <div className="kyna-editor-window__dots">
                      <span className="dot dot--red"></span>
                      <span className="dot dot--yellow"></span>
                      <span className="dot dot--green"></span>
                    </div>
                    <span className="kyna-editor-window__file">main.kyna</span>
                    <span className="kyna-editor-window__badge">kyna</span>
                  </div>
                  <div className="kyna-editor-window__body">
                    <CodeBlock language="kyna">
                      {STDLIB_CODE}
                    </CodeBlock>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Ready to Build Callout Section */}
        <section className="kyna-cta">
          <div className="kyna-cta__container">
            <h2 className="kyna-cta__title">Start building with Kyna today</h2>
            <p className="kyna-cta__desc">
              Explore the language tour, read the documentation, or clone the compiler repository to get started.
            </p>
            <div className="kyna-cta__actions">
              <Link to="/docs/intro" className="kyna-btn kyna-btn--primary">
                Explore the Docs
              </Link>
              <Link to="/docs/tutorial/tour" className="kyna-btn kyna-btn--secondary">
                Take the Language Tour
              </Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
