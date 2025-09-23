import { createRoot } from 'react-dom/client';
import SidePanel from './SidePanel';

const container = document.getElementById('sidePanel-root');
if (container) {
  const root = createRoot(container);
  root.render(<SidePanel />);
}
