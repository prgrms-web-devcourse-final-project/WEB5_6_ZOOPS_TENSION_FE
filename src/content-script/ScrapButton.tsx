import { ScrollText } from 'lucide-react';

function ScrapButton() {
  const handleClick = async () => {
    try {
      await chrome.runtime.sendMessage({
        action: 'openSidePanel',
        data: { currentUrl: window.location.href },
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  return (
    <button
      className="bg-primary px-3 py-2 text-white flex gap-2 rounded-full cursor-pointer active:scale-[0.98] hover:bg-[#01AB6280]"
      type="button"
      aria-label="스크랩 버튼"
      onClick={handleClick}
    >
      <ScrollText strokeWidth={1} /> scrap
    </button>
  );
}

export default ScrapButton;
