import { tw } from '@/utils/tw';

interface Props {
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}

const Button = ({ children, icon, className }: Props) => {
  return (
    <button
      type="button"
      className={tw(
        'flex-center gap-1 text-black rounded-lg py-3 w-full cursor-pointer',
        className
      )}
    >
      {icon}
      <span className="font-bold text-base">{children}</span>
    </button>
  );
};
export default Button;
