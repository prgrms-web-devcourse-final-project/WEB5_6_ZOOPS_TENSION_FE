import { createRoot } from 'react-dom/client';
import SidePanel from './SidePanel';
import '@/globals.css';

const container = document.getElementById('sideTab-root');
if (container) {
  const root = createRoot(container);
  root.render(<SidePanel />);
}
