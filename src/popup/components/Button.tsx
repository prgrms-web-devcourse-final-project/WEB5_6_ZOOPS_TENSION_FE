import { tw } from '@/utils/tw';

interface Props {
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}

const Button = ({ children, icon, className }: Props) => {
  // 사이드 판넬 닫기 테스트
  const handleClick = async () => {
    await chrome.runtime.sendMessage({ action: 'close-sidePanel' });
  };

  return (
    <button
      type="button"
      className={tw(
        'flex-center gap-2 text-black rounded-lg py-2 w-full cursor-pointer active:scale-[0.98] shadow-sm',
        className
      )}
      onClick={handleClick}
    >
      {icon}
      <span className="font-medium text-sm w-2/5">{children}</span>
    </button>
  );
};
export default Button;
