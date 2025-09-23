import GoogleAuthButton from './components/GoogleAuthButton';
import KaKaoAuthButton from './components/KaKaoAuthButton';

const SidePanel = () => {
  return (
    <main className="flex-center h-screen">
      <section className="flex flex-col gap-4">
        <h1 className="sr-only">사이드 패널</h1>
        <div className="flex-center flex-col">
          <img className="block" src="/images/logo.webp" alt="ZOOPZOOP logo" />
          <span className="font-bold text-lg">
            마음에 드는 페이지, 놓치지 말고 줍줍하세요!
          </span>
        </div>
        <KaKaoAuthButton />
        <GoogleAuthButton />
      </section>
    </main>
  );
};
export default SidePanel;
