import { tw } from '@/utils/tw';
import { Check, X } from 'lucide-react';
import { useScrap } from '../hook/useScrap';
import { BUTTON_STATUS } from '../model/constants';

interface Props {
  isDragging: boolean;
}

const ScrapButton = ({ isDragging }: Props) => {
  const { buttonState, scrapUrl } = useScrap();

  const handleClick = () => {
    if (isDragging) return;
    scrapUrl();
  };

  return (
    <div className="w-[112px] flex-center">
      <button
        type="button"
        aria-label="스크랩 버튼"
        onClick={handleClick}
        disabled={buttonState !== BUTTON_STATUS.DEFAULT}
        className={tw(
          'h-[40px] flex-center font-bold text-[12px] tracking-wider cursor-pointer transition-all duration-300 ease-in-out',
          buttonState === BUTTON_STATUS.DEFAULT &&
            'w-full px-[16px] py-[8px] rounded-full bg-white border-2 border-solid border-primary text-primary hover:text-white hover:bg-primary active:tracking-[2px]',
          buttonState === BUTTON_STATUS.LOADING &&
            'w-[40px] rounded-full bg-white border-4 border-solid border-[#bbbbbb] border-l-primary animate-spin',
          buttonState === BUTTON_STATUS.SUCCESS &&
            'w-full rounded-full bg-primary border-2 border-solid border-primary text-white',
          buttonState === BUTTON_STATUS.ERROR &&
            'w-full rounded-full bg-red-500 border-2 border-solid border-red-500 text-white'
        )}
      >
        {buttonState === BUTTON_STATUS.DEFAULT && 'SCRAP'}
        {buttonState === BUTTON_STATUS.LOADING && ''}
        {buttonState === BUTTON_STATUS.SUCCESS && <Check size={16} strokeWidth={3} />}
        {buttonState === BUTTON_STATUS.ERROR && <X size={16} strokeWidth={3} />}
      </button>
    </div>
  );
};

export default ScrapButton;
