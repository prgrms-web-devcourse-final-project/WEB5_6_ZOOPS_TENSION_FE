import { Check } from 'lucide-react';
import { useState } from 'react';
import { tw } from '@/utils/tw';

interface Props {
  isDragging: boolean;
}

/**
 * 시나리오
 * 1. 크롬 인스턴스를 이용해서 로그인을 관리 한다.
 */
function ScrapButton({ isDragging }: Props) {
  const [buttonState, setButtonState] = useState('default');

  // 스크랩 버튼 클릭
  const handleClick = async () => {
    // cookie 확인 로직

    if (isDragging) return;
    setButtonState('loading');
    // 실제 API 호출이나 로직 처리
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2초 대기
    setButtonState('success');

    // 3초 후 원래 상태로 복귀
    setTimeout(() => setButtonState('default'), 3000);

    // try {
    //   await chrome.runtime.sendMessage({
    //     action: 'openSidePanel',
    //     data: { currentUrl: window.location.href },
    //   });
    // } catch (error) {
    //   if (error instanceof Error) {
    //     console.error(error.message);
    //   }
    // }
  };

  return (
    <div className="w-28 flex-center">
      <button
        type="button"
        aria-label="스크랩 버튼"
        onClick={handleClick}
        disabled={buttonState !== 'default'}
        className={tw(
          'h-10 flex-center font-bold text-xs tracking-wider cursor-pointer transition-all duration-300 ease-in-out',
          buttonState === 'default' &&
            'w-full px-4 py-2 rounded-full bg-white border-2 border-solid border-primary text-primary hover:text-white hover:bg-primary active:tracking-[2px]',
          buttonState === 'loading' &&
            'w-10 rounded-full bg-white border-4 border-solid border-[#bbbbbb] border-l-primary animate-spin',
          buttonState === 'success' &&
            'w-full rounded-full bg-primary border-2 border-solid border-primary text-white'
        )}
      >
        {buttonState === 'default' && 'SCRAP'}
        {buttonState === 'loading' && ''}
        {buttonState === 'success' && <Check size={16} strokeWidth={3} />}
      </button>
    </div>
  );
}

export default ScrapButton;
