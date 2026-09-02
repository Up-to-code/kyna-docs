import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';

const SNIPPETS = [
  {
    id: 'async',
    file: 'fetch.kyna',
    lang: 'kyna',
    badge: 'Async & Fetch',
    title: 'Native Asynchronous Networking',
    desc: 'Perform non-blocking HTTP requests, parse JSON payloads, and handle errors cleanly with first-class async and await.',
    code: `async fn fetchTelemetry(service: str): str {
    try {
        const res = await fetch("https://api.kyna.dev/health/" + service, {
            timeout: 5000,
            headers: { "Accept": "application/json" }
        });
        const data = jsonParse(res);
        return "Status: " + data["status"] + " | QPS: " + data["qps"];
    } catch (err) {
        return "Network Error [" + err.code + "]: " + err.message;
    }
}

const status = await fetchTelemetry("auth");
print(status);`
  },
  {
    id: 'safety',
    file: 'safety.kyna',
    lang: 'kyna',
    badge: 'Type Safety',
    title: 'Compile-Time Safety & Null Narrowing',
    desc: 'Eliminate null dereference crashes. Types are non-nullable by default, with automatic flow-sensitive type narrowing.',
    code: `fn findUser(id: int): str? {
    if (id <= 0) {
        return null; # Explicit nullability with T?
    }
    return "User_" + id;
}

var user: str? = findUser(42);
if (user != null) {
    # Type automatically narrows from 'str?' to 'str'
    print("Active profile:", user);
    print("Name length:", len(user));
}`
  },
  {
    id: 'stdlib',
    file: 'benchmark.kyna',
    lang: 'kyna',
    badge: 'Standard Library',
    title: 'Zero-Dependency Native Standard Library',
    desc: 'High-resolution nanosecond timers, file I/O, and data format parsing built directly into the language runtime.',
    code: `import std.fs;
import std.time;

# Measure nanosecond execution
const start = time.nowNs();

# Safe filesystem read and JSON parsing
if (fs.exists("config.json")) {
    const raw = fs.readString("config.json");
    const config = jsonParse(raw);
    print("Database Host:", config["database"]["host"]);
}

const elapsedMs = (time.nowNs() - start) / 1000000;
print("Config loaded in:", elapsedMs, "ms");`
  },
  {
    id: 'cli',
    file: 'terminal',
    lang: 'bash',
    badge: 'Developer Tooling',
    title: 'Unified CLI & Compiler Diagnostics',
    desc: 'Run instant type checks, inspect compiler intermediate representations, and execute scripts on the Bytecode VM.',
    code: `# Run static type checks and diagnostics
$ ky check server.kyna

# Execute on the Bytecode Virtual Machine
$ ky run server.kyna

# Inspect compiler intermediate representations
$ ky hir server.kyna
$ ky bytecode server.kyna`
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const quickstartCmd = 'git clone https://github.com/Up-to-code/Kyma && cmake --build build-debug';

  const handleCopy = () => {
    navigator.clipboard.writeText(quickstartCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeSnippet = SNIPPETS[activeTab];

  return (
    <Layout
      title="Kyna — A fast, statically typed language"
      description="Kyna is a modern, statically typed language compiled to bytecode, engineered for backend services and safe scripting."
    >
      <div className="kyna-landing">
        
        {/* Left-Aligned Premium Hero Section */}
        <section className="kyna-hero">
          <div className="kyna-hero__container">
            
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

        {/* Section 1: Interactive Language Playground & Tabs */}
        <section className="kyna-playground-section">
          <div className="kyna-playground__container">
            
            <div className="kyna-section-header">
              <span className="kyna-section-kicker">Language in Action</span>
              <h2 className="kyna-section-title">Simple to write. Safe by construction.</h2>
              <p className="kyna-section-desc">
                Explore real Kyna patterns: robust asynchronous networking, compile-time null safety, 
                high-resolution performance timing, and transparent compiler diagnostics.
              </p>
            </div>

            <div className="kyna-interactive-card">
              {/* Tab Navigation Bar */}
              <div className="kyna-tab-bar">
                <div className="kyna-tab-bar__dots">
                  <span className="dot dot--red"></span>
                  <span className="dot dot--yellow"></span>
                  <span className="dot dot--green"></span>
                </div>
                
                <div className="kyna-tab-bar__items">
                  {SNIPPETS.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`kyna-tab-btn ${activeTab === idx ? 'kyna-tab-btn--active' : ''}`}
                      onClick={() => setActiveTab(idx)}
                    >
                      <span className="kyna-tab-btn__name">{item.file}</span>
                    </button>
                  ))}
                </div>

                <div className="kyna-tab-bar__badge">
                  {activeSnippet.badge}
                </div>
              </div>

              {/* Code & Explanation Body */}
              <div className="kyna-interactive-card__body">
                <div className="kyna-interactive-card__editor">
                  <CodeBlock language={activeSnippet.lang} key={activeSnippet.id}>
                    {activeSnippet.code}
                  </CodeBlock>
                </div>
                
                <div className="kyna-interactive-card__sidebar">
                  <span className="kyna-interactive-card__pill">{activeSnippet.badge}</span>
                  <h3 className="kyna-interactive-card__heading">{activeSnippet.title}</h3>
                  <p className="kyna-interactive-card__text">{activeSnippet.desc}</p>
                  
                  <div className="kyna-interactive-card__meta">
                    <div className="kyna-meta-item">
                      <span className="kyna-meta-check">✓</span>
                      <span>Static verification before execution</span>
                    </div>
                    <div className="kyna-meta-item">
                      <span className="kyna-meta-check">✓</span>
                      <span>Optimized Bytecode VM runtime</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Section 2: Bento Grid Showcase */}
        <section className="kyna-bento-section">
          <div className="kyna-bento__container">
            
            <div className="kyna-section-header">
              <span className="kyna-section-kicker">Core Capabilities</span>
              <h2 className="kyna-section-title">Designed for backend reliability</h2>
              <p className="kyna-section-desc">
                Everything you need to build fast, robust command-line tools, microservices, and server scripts.
              </p>
            </div>

            <div className="kyna-bento-grid">
              
              {/* Bento 1: Large Card */}
              <div className="kyna-bento-card kyna-bento-card--featured">
                <div className="kyna-bento-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="kyna-bento-card__title">Compile-Time Verification & Flow Typing</h3>
                <p className="kyna-bento-card__desc">
                  Eliminate runtime type errors. Types in Kyna cannot hold <code>null</code> unless explicitly marked with <code>T?</code>. Guard conditions automatically narrow nullable types into safe non-nullable references.
                </p>
                <div className="kyna-bento-card__mini-code">
                  <div className="kyna-mini-terminal">
                    <code>
                      <span className="k-kw">var</span> token: <span className="k-type">str?</span> = <span className="k-fn">auth</span>();<br />
                      <span className="k-kw">if</span> (token != <span className="k-num">null</span>) &#123; <span className="k-comment"># Narrowed to 'str'</span><br />
                      &nbsp;&nbsp;<span className="k-fn">print</span>(<span className="k-str">"Valid:"</span>, token);<br />
                      &#125;
                    </code>
                  </div>
                </div>
              </div>

              {/* Bento 2 */}
              <div className="kyna-bento-card">
                <div className="kyna-bento-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <h3 className="kyna-bento-card__title">Native Async I/O</h3>
                <p className="kyna-bento-card__desc">
                  Built-in event loop execution and non-blocking <code>fetch()</code> API with custom headers and timeout handling.
                </p>
              </div>

              {/* Bento 3 */}
              <div className="kyna-bento-card">
                <div className="kyna-bento-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 17 10 11 4 5"></polyline>
                    <line x1="12" y1="19" x2="20" y2="19"></line>
                  </svg>
                </div>
                <h3 className="kyna-bento-card__title">Multi-Stage Diagnostics</h3>
                <p className="kyna-bento-card__desc">
                  Inspect compiler internals from AST to HIR, MIR, and Bytecode with instant compiler flags.
                </p>
              </div>

              {/* Bento 4: Large Card */}
              <div className="kyna-bento-card kyna-bento-card--featured">
                <div className="kyna-bento-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="kyna-bento-card__title">Zero-Dependency Standard Library</h3>
                <p className="kyna-bento-card__desc">
                  Everything you need without heavy external package managers. Includes native modules for file operations (<code>std.fs</code>), precision timers (<code>std.time</code>), JSON (<code>jsonParse</code>), and TOML.
                </p>
                <div className="kyna-bento-card__chips">
                  <span className="kyna-chip">std.fs</span>
                  <span className="kyna-chip">std.time</span>
                  <span className="kyna-chip">std.collections</span>
                  <span className="kyna-chip">JSON & TOML</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Section 3: Pillars / Architectural Values */}
        <section className="kyna-pillars-section">
          <div className="kyna-pillars__container">
            
            <div className="kyna-pillar-item">
              <div className="kyna-pillar-num">01</div>
              <h4 className="kyna-pillar-title">Fast Startup & Low Footprint</h4>
              <p className="kyna-pillar-desc">
                Runs on a lightweight, optimized Bytecode Virtual Machine with immediate execution and minimal memory overhead.
              </p>
            </div>

            <div className="kyna-pillar-item">
              <div className="kyna-pillar-num">02</div>
              <h4 className="kyna-pillar-title">Expressive & Readable Syntax</h4>
              <p className="kyna-pillar-desc">
                Combines clean, human-friendly scripting syntax with the compile-time safety and guarantees of modern statically typed languages.
              </p>
            </div>

            <div className="kyna-pillar-item">
              <div className="kyna-pillar-num">03</div>
              <h4 className="kyna-pillar-title">Deterministic Error Handling</h4>
              <p className="kyna-pillar-desc">
                Unified exception propagation with structured diagnostic codes across both user code and runtime VM operations.
              </p>
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
