import { GripVertical } from 'lucide-react';

interface Props {
  onDragStart: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DragSection = ({ onDragStart }: Props) => {
  return (
    <button
      type="button"
      className="group-hover:opacity-100 opacity-0 cursor-grab active:cursor-grabbing text-gray-400 transition-opacity duration-200"
      aria-label="드레그 버튼"
      onMouseDown={onDragStart}
    >
      <GripVertical aria-hidden="true" />
    </button>
  );
};
export default DragSection;
