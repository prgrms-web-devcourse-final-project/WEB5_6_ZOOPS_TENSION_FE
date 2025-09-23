import KakaoLogo from '@/assets/kakaoLogo.svg?react';
import Button from './Button';

const KaKaoAuthButton = () => {
  return (
    <Button className="bg-kakao hover:bg-kakao/60" icon={<KakaoLogo fontSize={20} />}>
      카카오로 시작하기
    </Button>
  );
};
export default KaKaoAuthButton;
