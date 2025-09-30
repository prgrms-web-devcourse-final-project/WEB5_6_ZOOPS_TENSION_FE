import { Check } from 'lucide-react';
import { useState } from 'react';
import { tw } from '@/utils/tw';
import { sendMessage } from '../model/utils';
import { BUTTON_STATUS, MESSAGE_ACTION } from '../model/constants';
import type { ScrapButton } from '../model/type';

interface Props {
  isDragging: boolean;
}

function ScrapButton({ isDragging }: Props) {
  const [buttonState, setButtonState] = useState<ScrapButton>(BUTTON_STATUS.DEFAULT);

  const handleClick = async () => {
    if (isDragging) return;
    setButtonState(BUTTON_STATUS.LOADING);
    try {
      const result = await sendMessage({
        action: MESSAGE_ACTION.SCRAP,
        url: window.location.href,
      });

      console.log('scrap result', result);
      setButtonState(BUTTON_STATUS.SUCCESS);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    } finally {
      setButtonState(BUTTON_STATUS.DEFAULT);
    }
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
