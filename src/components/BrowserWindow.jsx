import React, {useState} from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function BrowserWindow({
  children,
  title = 'main.kyna',
  tabs,
  activeTab = 0,
  onTabChange,
  output,
  language = 'kyna',
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = typeof children === 'string' ? children : '';
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="kyna-window">
      <div className="kyna-window__header">
        <div className="kyna-window__controls">
          <span className="kyna-window__dot kyna-window__dot--close" />
          <span className="kyna-window__dot kyna-window__dot--min" />
          <span className="kyna-window__dot kyna-window__dot--max" />
        </div>

        {tabs && tabs.length > 0 ? (
          <div className="kyna-window__tabs">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                type="button"
                className={`kyna-window__tab ${idx === activeTab ? 'kyna-window__tab--active' : ''}`}
                onClick={() => onTabChange && onTabChange(idx)}
              >
                <span className="kyna-window__tab-icon">⚡</span>
                <span className="kyna-window__tab-label">{tab.title || tab.name || tab}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="kyna-window__title">
            <span className="kyna-window__title-icon">⚡</span>
            <span>{title}</span>
          </div>
        )}

        <div className="kyna-window__actions">
          <button
            type="button"
            className="kyna-window__copy-btn"
            onClick={handleCopy}
            title="Copy code"
          >
            {copied ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>Copied</span>
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="kyna-window__body">
        <CodeBlock
          className="kyna-window__code"
          language={language}
          showLineNumbers={true}
        >
          {children}
        </CodeBlock>
      </div>

      {output && (
        <div className="kyna-window__terminal">
          <div className="kyna-window__terminal-header">
            <span className="kyna-window__terminal-prompt">Output</span>
            <span className="kyna-window__terminal-status">Compiled in 0.4ms</span>
          </div>
          <pre className="kyna-window__terminal-content">
            <code>{output}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
