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

# Run static type checks and diagnostics
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

# File system read and write
const raw = fs.readString("config.json");
const config = jsonParse(raw);

const elapsed = (time.nowNs() - start) / 1000000;
print("Config loaded in:", elapsed, "ms");`;

export default function Home() {
  const [copied, setCopied] = useState(false);
  const quickstartCmd = 'git clone https://github.com/Up-to-code/Kyma && cmake --build build-debug && ./build-debug/bin/ky run hello.kyna';

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
      <div className="gh-landing">
        {/* Hero Section */}
        <section className="gh-hero">
          <div className="gh-hero__container">
            <h1 className="gh-hero__title">
              A fast, statically typed language <br />
              for backend systems.
            </h1>

            <p className="gh-hero__subtitle">
              Kyna combines clean, readable syntax with compile-time safety verification,
              native async I/O, transparent compiler stages, and an optimized bytecode virtual machine.
            </p>

            <div className="gh-hero__actions">
              <Link to="/docs/intro" className="gh-btn gh-btn--primary">
                Read Documentation
              </Link>
              <Link to="/docs/tutorial/getting-started" className="gh-btn gh-btn--secondary">
                Getting Started Tutorial
              </Link>
              <a
                href="https://github.com/Up-to-code/Kyma"
                target="_blank"
                rel="noreferrer"
                className="gh-btn gh-btn--secondary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub Repository</span>
              </a>
            </div>

            {/* Quickstart Command Box */}
            <div className="gh-quickstart">
              <div className="gh-quickstart__header">
                <span>Quick install & run</span>
                <button type="button" className="gh-quickstart__copy" onClick={handleCopy}>
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <div className="gh-quickstart__body">
                <span className="gh-quickstart__prompt">$</span>
                <code>{quickstartCmd}</code>
              </div>
            </div>
          </div>
        </section>

        {/* Alternating Zig-Zag Feature Sections */}
        <div className="zigzag-container">
          {/* Row 1: Left = Text, Right = Code */}
          <section className="zigzag-row">
            <div className="zigzag-col zigzag-col--text">
              <span className="zigzag-kicker">Type System</span>
              <h2 className="zigzag-title">Compile-Time Safety & Explicit Nullability</h2>
              <p className="zigzag-desc">
                Catch type mismatches, unbound variables, and null dereference bugs before code executes.
                Standard types in Kyna cannot hold <code>null</code>. Use <code>T?</code> for optional values,
                with automatic type narrowing when guarded by null checks.
              </p>
              <ul className="zigzag-list">
                <li>Non-nullable types by default (<code>str</code>, <code>int</code>, <code>bool</code>)</li>
                <li>Explicit nullable annotations (<code>str?</code>)</li>
                <li>Automatic type narrowing inside conditional branches</li>
              </ul>
            </div>
            <div className="zigzag-col zigzag-col--code">
              <div className="gh-code-card">
                <div className="gh-code-card__header">
                  <span>safety.kyna</span>
                  <span className="gh-code-card__badge">kyna</span>
                </div>
                <CodeBlock language="kyna" className="gh-code-block">
                  {SAFETY_CODE}
                </CodeBlock>
              </div>
            </div>
          </section>

          {/* Row 2 (Reversed): Left = Code, Right = Text */}
          <section className="zigzag-row zigzag-row--reverse">
            <div className="zigzag-col zigzag-col--code">
              <div className="gh-code-card">
                <div className="gh-code-card__header">
                  <span>terminal — ky CLI</span>
                  <span className="gh-code-card__badge">bash</span>
                </div>
                <CodeBlock language="bash" className="gh-code-block">
                  {CLI_CODE}
                </CodeBlock>
              </div>
            </div>
            <div className="zigzag-col zigzag-col--text">
              <span className="zigzag-kicker">Developer Tooling</span>
              <h2 className="zigzag-title">Built-in Developer Tooling & CLI</h2>
              <p className="zigzag-desc">
                The <code>ky</code> CLI provides instant feedback during development. Run type checks without executing,
                inspect intermediate representations at every compilation phase, and run applications on the fast Bytecode VM.
              </p>
              <ul className="zigzag-list">
                <li><code>ky check</code> for instant compile-time error diagnostics</li>
                <li>Detailed error locations pointing to line and column with help messages</li>
                <li>Inspection flags for Tokens, AST, HIR, MIR, and Bytecode</li>
              </ul>
            </div>
          </section>

          {/* Row 3: Left = Text, Right = Code */}
          <section className="zigzag-row">
            <div className="zigzag-col zigzag-col--text">
              <span className="zigzag-kicker">Concurrency</span>
              <h2 className="zigzag-title">Native Async Runtime & HTTP Fetch</h2>
              <p className="zigzag-desc">
                Asynchronous execution is baked directly into the language.
                Perform non-blocking HTTP requests, parse incoming JSON responses, and coordinate concurrent tasks
                using standard <code>async</code> and <code>await</code> keywords.
              </p>
              <ul className="zigzag-list">
                <li>First-class <code>async</code> functions and <code>await</code> expressions</li>
                <li>Built-in <code>fetch()</code> API with header, timeout, and method options</li>
                <li>Native JSON encoding (<code>jsonStringify</code>) and decoding (<code>jsonParse</code>)</li>
              </ul>
            </div>
            <div className="zigzag-col zigzag-col--code">
              <div className="gh-code-card">
                <div className="gh-code-card__header">
                  <span>fetch.kyna</span>
                  <span className="gh-code-card__badge">kyna</span>
                </div>
                <CodeBlock language="kyna" className="gh-code-block">
                  {FETCH_CODE}
                </CodeBlock>
              </div>
            </div>
          </section>

          {/* Row 4 (Reversed): Left = Code, Right = Text */}
          <section className="zigzag-row zigzag-row--reverse">
            <div className="zigzag-col zigzag-col--code">
              <div className="gh-code-card">
                <div className="gh-code-card__header">
                  <span>main.kyna</span>
                  <span className="gh-code-card__badge">kyna</span>
                </div>
                <CodeBlock language="kyna" className="gh-code-block">
                  {STDLIB_CODE}
                </CodeBlock>
              </div>
            </div>
            <div className="zigzag-col zigzag-col--text">
              <span className="zigzag-kicker">Standard Library</span>
              <h2 className="zigzag-title">Zero-Dependency Standard Library</h2>
              <p className="zigzag-desc">
                Build backend scripts and utilities without pulling in heavy external dependencies.
                Kyna ships with built-in modules for file I/O, high-resolution timers, collections, string manipulation, and formats.
              </p>
              <ul className="zigzag-list">
                <li><code>std.fs</code> for reading and writing files safely</li>
                <li><code>std.time</code> for millisecond and nanosecond timers</li>
                <li>Built-in TOML, JSON, and string processing functions</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
