import KakaoLogo from '@/assets/kakaoLogo.svg?react';
import Button from './Button';

const KaKaoAuthButton = () => {
  return (
    <Button
      className="bg-kakao hover:bg-[#f9dc5a] border-kakao"
      icon={<KakaoLogo className="size-4" />}
    >
      카카오로 시작하기
    </Button>
  );
};
export default KaKaoAuthButton;
