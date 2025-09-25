import GoogleAuthButton from './GoogleAuthButton';
import KaKaoAuthButton from './KaKaoAuthButton';

const Popup = () => {
  return (
    <div className="flex-center flex-col gap-3" style={{ width: 300, padding: 16 }}>
      <img src="/images/logo.webp" className="w-40" />
      <span className="text-sm font-semibold text-center">
        마음에 드는 페이지, 놓치지 말고 줍줍하세요!
      </span>
      <KaKaoAuthButton />
      <GoogleAuthButton />
    </div>
  );
};

export default Popup;
