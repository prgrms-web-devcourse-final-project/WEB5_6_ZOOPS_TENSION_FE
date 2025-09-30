import GoogleLogo from '@/assets/googleLogo.svg?react';
import Button from './Button';
import { useState } from 'react';
import { useAuthLogin } from '../hooks/useAuthLogin';
import { PROVIDER } from '@/utils/constants';

interface Props {
  onLoginSuccess: () => void;
}

const GoogleAuthButton = ({ onLoginSuccess }: Props) => {
  const { handleLogin } = useAuthLogin();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);

      await handleLogin(PROVIDER.GOOGLE);

      onLoginSuccess();
    } catch (error) {
      console.error('로그인 실패', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      className="border border-gray-200 hover:bg-gray-100"
      icon={<GoogleLogo className="size-4" />}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? '로그인 중...' : '구글로 시작하기'}
    </Button>
  );
};
export default GoogleAuthButton;
