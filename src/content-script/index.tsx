import { createRoot } from 'react-dom/client';
import ScrapButton from './ScrapButton.tsx';
import tailwindCss from '@/globals.css?inline';

const injectButton = () => {
  if (document.getElementById('zoops-tension-root')) {
    return;
  }

  const root = document.createElement('div');
  root.id = 'zoops-tension-root';

  // 줍스텐션 root 스타일 정의
  Object.assign(root.style, {
    position: 'fixed',
    bottom: '100px',
    right: '20px',
    zIndex: '9999',
  });
  // body에 root 주입
  document.body.appendChild(root);

  const shadow = root.attachShadow({ mode: 'closed' });

  const styleEl = document.createElement('style');
  styleEl.textContent = tailwindCss;
  shadow.appendChild(styleEl);

  createRoot(shadow).render(<ScrapButton />);
};

if (document.readyState === 'complete') {
  injectButton();
} else {
  window.addEventListener('load', injectButton);
}
