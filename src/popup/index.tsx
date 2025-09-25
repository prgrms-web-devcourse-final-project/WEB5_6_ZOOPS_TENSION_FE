import { createRoot } from 'react-dom/client';
import Popup from './components/Popup';
import '@/globals.css';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<Popup />);
