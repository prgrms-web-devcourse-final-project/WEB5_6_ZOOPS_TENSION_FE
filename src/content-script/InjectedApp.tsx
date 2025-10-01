import DragSection from './components/DragHandle';
import ScrapButton from './components/ScrapButton';
import { useDrag } from './hook/useDrag';

const InjectedApp = () => {
  const { handleDragStart, isDragging, position } = useDrag();

  return (
    <div
      className="fixed group flex-center gap-1"
      style={{
        top: position.y,
        left: position.x,
        zIndex: 2147483647,
      }}
    >
      <DragSection onDragStart={handleDragStart} />
      <ScrapButton isDragging={isDragging} />
    </div>
  );
};
export default InjectedApp;
