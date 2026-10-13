import React, {useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import {AppsTable, MusicImage} from '@site/src/components/BuiltWithKyna';

const INSTALLERS = [
  {label: 'npm', command: 'npm install --global @kyna-language/cli@preview', note: 'Install the published preview. Requires Node.js 18 or newer.'},
  {label: 'Bun', command: 'bun add --global --trust @kyna-language/cli@preview', note: 'Allow the checksum-verified native installation step.'},
  {label: 'curl', command: 'curl -fsSL https://github.com/qentrah/Kyna/releases/download/v1.0.0-preview.3/install.sh | sh -s -- --channel preview --version 1.0.0-preview.3', note: 'Published preview for macOS and Linux. Node.js is not required.'},
  {label: 'PowerShell', command: "& ([scriptblock]::Create((irm 'https://github.com/qentrah/Kyna/releases/download/v1.0.0-preview.3/install.ps1'))) -Channel preview -Version 1.0.0-preview.3", note: 'Published preview for Windows x64. Node.js is not required.'},
];

const FIRST_PROGRAM = [
  'fn greet(name: str): str {',
  '    return "Hello, " + name;',
  '}',
  '',
  'const language = "Kyna";',
  'console.log(greet(language));',
].join('\n');

const PATHS = [
  {title: 'Start with the language', description: 'Install Kyna, write a small program, and learn types, functions and modules.', to: '/docs/tutorial/getting-started', label: 'Getting started'},
  {title: 'Build a native app', description: 'Connect Kyna behavior to GUI, geometry and machine-learning packages.', to: '/docs/libraries/native', label: 'Native libraries'},
  {title: 'Find an exact answer', description: 'Read the syntax, control-flow rules and standard-library reference.', to: '/docs/reference/bindings', label: 'Language reference'},
];

export default function Home() {
  const [activeInstaller, setActiveInstaller] = useState(0);
  const [copyMessage, setCopyMessage] = useState('');
  const installer = INSTALLERS[activeInstaller];

  async function copyInstallCommand() {
    try {
      await navigator.clipboard.writeText(installer.command);
      setCopyMessage(installer.label + ' command copied.');
    } catch {
      setCopyMessage('Copy unavailable. Select and copy the command above.');
    }
  }

  return (
    <Layout title="Build with Kyna" description="Learn Kyna and explore real applications built with its typed compiler, CLI and native libraries.">
      <section className="kyna-home-section kyna-hero">
        <div className="kyna-container">
          <span className="kyna-eyebrow">Kyna · a Qentrah language</span>
          <h1>One language.<span>From idea to application.</span></h1>
          <p>Write readable, typed code. Build real applications with Kyna's compiler,
            practical CLI and native libraries.</p>
          <div className="kyna-actions">
            <Link to="/docs/tutorial/getting-started" className="kyna-button kyna-button--primary">Start building ↗</Link>
            <Link to="/docs/built-with-kyna" className="kyna-button">Explore Kyna apps</Link>
          </div>
          <div className="kyna-install">
            <div className="kyna-install-options" role="group" aria-label="Installation method">
              {INSTALLERS.map((option, index) => (
                <button key={option.label} type="button" aria-pressed={activeInstaller === index}
                  onClick={() => {setActiveInstaller(index); setCopyMessage('');}}>
                  {option.label}
                </button>
              ))}
            </div>
            <div className="kyna-install-command">
              <code>{installer.command}</code>
              <button type="button" onClick={copyInstallCommand} aria-label={'Copy ' + installer.label + ' installation command'}>Copy</button>
            </div>
            <p className="kyna-install-note">{installer.note} Native app features use the current source build.</p>
            <span role="status" className="kyna-install-note">{copyMessage}</span>
          </div>
        </div>
      </section>

      <section className="kyna-home-section" aria-labelledby="built-with-kyna">
        <div className="kyna-container">
          <div className="kyna-section-heading">
            <span className="kyna-eyebrow">Built with Kyna</span>
            <h2 id="built-with-kyna">The language, in real applications.</h2>
            <p>Application logic in Kyna. Native libraries for the work around it.
              Follow the source, run the examples, and see how the pieces fit.</p>
          </div>
          <div className="kyna-app-feature">
            <Link to="/docs/built-with-kyna" aria-label="See how Kyna Music is built"><MusicImage /></Link>
            <div>
              <span className="kyna-eyebrow">Featured application</span>
              <h3>Kyna Music</h3>
              <p>A native desktop player for your own music. Search, build playlists,
                queue tracks, shuffle and repeat. The application behavior runs in Kyna.</p>
              <p>Verified on Windows x64, Linux x64 and macOS ARM64.</p>
              <div className="kyna-actions">
                <Link to="/docs/built-with-kyna" className="kyna-button kyna-button--primary">How it is built ↗</Link>
                <a href="https://github.com/qentrah/kyna-music" className="kyna-button">Source code</a>
              </div>
            </div>
          </div>
          <AppsTable />
        </div>
      </section>

      <section className="kyna-home-section" aria-labelledby="learn-kyna">
        <div className="kyna-container">
          <div className="kyna-section-heading">
            <span className="kyna-eyebrow">Documentation</span>
            <h2 id="learn-kyna">Choose your next step.</h2>
          </div>
          <div className="kyna-learning-grid">
            {PATHS.map((path) => (
              <article className="kyna-learning-card" key={path.to}>
                <h3>{path.title}</h3><p>{path.description}</p>
                <Link to={path.to}>{path.label} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="kyna-home-section" aria-labelledby="first-program">
        <div className="kyna-container kyna-first-program">
          <div className="kyna-section-heading">
            <span className="kyna-eyebrow">First program</span>
            <h2 id="first-program">Readable code. Visible behavior.</h2>
            <p>Save the example as <code>hello.kyna</code> and run <code>ky run hello.kyna</code>.
              Check types before execution with <code>ky check hello.kyna</code>.</p>
            <Link to="/docs/tutorial/tour">Take the language tour →</Link>
          </div>
          <CodeBlock language="kyna" title="hello.kyna">{FIRST_PROGRAM}</CodeBlock>
        </div>
      </section>
    </Layout>
  );
}
