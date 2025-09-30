import { tw } from '@/utils/tw';

interface Props {
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ children, icon, className, onClick, disabled }: Props) => {
  return (
    <button
      type="button"
      className={tw(
        'flex-center gap-2 text-black rounded-lg py-2 w-full cursor-pointer active:scale-[0.98] shadow-sm',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      <span className="font-medium text-sm w-2/5">{children}</span>
    </button>
  );
};
export default Button;
