import KakaoLogo from '@/assets/kakaoLogo.svg?react';
import Button from './Button';
import { useState } from 'react';
import { useAuthLogin } from '../hooks/useAuthLogin';
import { PROVIDER } from '@/utils/constants';

interface Props {
  onLoginSuccess: () => void;
}

const KakaoAuthButton = ({ onLoginSuccess }: Props) => {
  const { handleLogin } = useAuthLogin();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);

      await handleLogin(PROVIDER.KAKAO);

      onLoginSuccess();
    } catch (error) {
      console.error('로그인 실패', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      className="bg-kakao hover:bg-[#f9dc5a] border-kakao"
      icon={<KakaoLogo className="size-4" />}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? '로그인 중...' : '카카오로 시작하기'}
    </Button>
  );
};
export default KakaoAuthButton;
