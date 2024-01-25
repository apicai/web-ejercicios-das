import React from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/";
import { Sandpack } from "https://esm.sh/@codesandbox/sandpack-react@2.8.0";

const defaultOptions = { 
  showConsoleButton: true,
  showLineNumbers: true,
  showInlineErrors: true,
  wrapContent: true,
  classes: {
    "sp-preview-actions": "custom-preview-actions",
    "sp-code-editor": "custom-code-editor",
    "sp-icon-standalone": "custom-icon-standalone"
  }
};

document.querySelectorAll('.sandpack').forEach(r => {
  const options = {
    ...defaultOptions, 
    editorHeight: r.getAttribute('data-height'), 
    editorWidthPercentage: r.getAttribute('data-width'),
    showNavigator: r.getAttribute('data-navigator'),
  };
  const props = {template: r.getAttribute('data-template') || "react", files: {}, options};
  r.addEventListener('keydown', e => e.stopPropagation());
  r.querySelectorAll('pre').forEach(p => 
    props.files[p.getAttribute('data-file')] = {
      code: p.textContent.trim(), 
      hidden: p.getAttribute('data-hidden'),
      active: p.getAttribute('data-active')
    });
  createRoot(r).render(React.createElement(Sandpack, props, null));
});

