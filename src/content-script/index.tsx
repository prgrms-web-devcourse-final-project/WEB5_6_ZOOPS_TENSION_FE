import { createRoot } from 'react-dom/client';
import tailwindCss from '@/globals.css?inline';
import InjectedApp from './InjectedApp';

const injectButton = () => {
  if (document.getElementById('zoops-tension-root')) {
    return;
  }

  const root = document.createElement('div');
  root.id = 'zoops-tension-root';

  // body에 root 주입
  document.body.appendChild(root);
  Object.assign(root.style, {
    all: 'initial',
    display: 'contents',
  });

  const shadow = root.attachShadow({ mode: 'closed' });

  const styleEl = document.createElement('style');
  styleEl.textContent = tailwindCss;
  shadow.appendChild(styleEl);

  createRoot(shadow).render(<InjectedApp />);
};

if (document.readyState === 'complete') {
  injectButton();
} else {
  window.addEventListener('load', injectButton);
}
