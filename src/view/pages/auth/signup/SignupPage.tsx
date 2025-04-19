import SignupPanel from '@pages/auth/signup/components/SignupPanel.tsx';

export default function SignupPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src={require('../../../../../public/assets/img/feature/login_bg.png')}
        alt="login background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="w-full h-full flex items-center justify-center">
      <SignupPanel />
      </div>
    </div>
  );
}