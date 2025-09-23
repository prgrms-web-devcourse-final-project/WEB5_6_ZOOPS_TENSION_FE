import { ScrollText } from 'lucide-react';

function ScrapButton() {
  return (
    <button
      className="bg-[#01AB62] px-3 py-2 text-white flex gap-2 rounded-full cursor-pointer active:scale-[0.98] hover:bg-[#01AB6280]"
      type="button"
      aria-label="스크랩 버튼"
    >
      <ScrollText strokeWidth={1} /> scrap
    </button>
  );
}

export default ScrapButton;
