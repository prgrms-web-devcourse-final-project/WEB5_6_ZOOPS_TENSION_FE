import GoogleLogo from '@/assets/googleLogo.svg?react';
import Button from './Button';

const GoogleAuthButton = () => {
  return (
    <Button
      className="border border-gray-200 hover:bg-gray-100"
      icon={<GoogleLogo fontSize={20} />}
    >
      구글로 시작하기
    </Button>
  );
};
export default GoogleAuthButton;
