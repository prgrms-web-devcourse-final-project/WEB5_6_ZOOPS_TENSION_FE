import { ScrollText } from 'lucide-react';

/**
 * 시나리오
 * 1. 크롬 인스턴스를 이용해서 로그인을 관리 한다.
 */
function ScrapButton() {
  // 스크랩 버튼 클릭
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
