import { useEffect, useState } from 'react';
import { useAuthLogin } from '../hooks/useAuthLogin';
import GoogleAuthButton from './GoogleAuthButton';
import KakaoAuthButton from './KakaoAuthButton';

const Popup = () => {
  const { checkAuthStatus, logout } = useAuthLogin();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const status = await checkAuthStatus();

    setIsLoggedIn(!!status.isLoggedIn);
  };

  const handleLogout = async () => {
    await logout();
    setIsLoggedIn(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="flex-center flex-col gap-3" style={{ width: 300, padding: 16 }}>
      <img src="/images/logo.webp" className="w-40" />
      <span className="text-sm font-semibold text-center">
        마음에 드는 페이지, 놓치지 말고 줍줍하세요!
      </span>
      {isLoggedIn ? (
        <div className="flex-1 flex flex-col w-full">
          <div className="bg-blue-50 rounded-lg p-4 mb-3">
            <p className="text-sm text-blue-900 font-medium">✓ 로그인 완료!</p>
            <p className="text-xs text-blue-700 mt-1">
              확장 프로그램을 사용할 수 있습니다
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white rounded-lg py-2 px-4 w-full font-medium transition-colors"
          >
            로그아웃
          </button>
        </div>
      ) : (
        <>
          <KakaoAuthButton onLoginSuccess={handleLoginSuccess} />
          <GoogleAuthButton onLoginSuccess={handleLoginSuccess} />
        </>
      )}
    </div>
  );
};

export default Popup;
