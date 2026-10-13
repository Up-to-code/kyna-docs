import React, {useEffect, useRef, useState} from 'react';
import LocalSearchBar from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchBar/SearchBar';
import {useLocation} from '@docusaurus/router';

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const handleShortcut = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        event.stopImmediatePropagation();
        setOpen(true);
        return;
      }

      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleShortcut, true);
    return () => window.removeEventListener('keydown', handleShortcut, true);
  }, []);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = 'hidden';

    const frame = window.requestAnimationFrame(() => {
      (dialogRef.current?.querySelector('input') || dialogRef.current)?.focus();
    });

    function keepFocusInDialog(event) {
      if (event.key !== 'Tab') return;
      const elements = Array.from(dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex="0"]',
      ) || []).filter((element) => element.getClientRects().length > 0);
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (!first) { event.preventDefault(); return; }
      if (event.shiftKey && (document.activeElement === first || !dialogRef.current?.contains(document.activeElement))) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !dialogRef.current?.contains(document.activeElement))) {
        event.preventDefault(); first.focus();
      }
    }
    document.addEventListener('keydown', keepFocusInDialog);

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener('keydown', keepFocusInDialog);
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected && previousFocus !== document.body) previousFocus.focus();
      else triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="kyna-command-trigger"
        aria-label="Search documentation"
        aria-haspopup="dialog"
        aria-expanded={open}
        title="Search documentation (⌘K or Ctrl+K)"
        onClick={() => setOpen(true)}
      >
        <SearchIcon />
      </button>

      {open && (
        <div
          className="kyna-command-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setOpen(false);
            }
          }}
        >
          <section
            ref={dialogRef}
            className="kyna-command-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="kyna-command-title"
            tabIndex={-1}
            onClick={(event) => {
              if (event.target.closest('a')) {
                setOpen(false);
              }
            }}
          >
            <header className="kyna-command-modal__header">
              <div>
                <span className="kyna-command-modal__eyebrow">Documentation</span>
                <h2 id="kyna-command-title">Search Kyna</h2>
              </div>
              <button
                type="button"
                className="kyna-command-modal__close"
                aria-label="Close search"
                onClick={() => setOpen(false)}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </header>

            <div className="kyna-command-modal__search">
              <LocalSearchBar />
            </div>

            <footer className="kyna-command-modal__footer">
              <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
              <span><kbd>Enter</kbd> Open</span>
              <span><kbd>Esc</kbd> Close</span>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}
