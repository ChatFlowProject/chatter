import LoginPanel from "./components/LoginPanel.tsx";

export default function LoginPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src={require('../../../../../public/assets/img/feature/login_bg.png')}
        alt="login background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="w-full h-full flex items-center justify-center">
        <LoginPanel />
      </div>
    </div>
  );
}