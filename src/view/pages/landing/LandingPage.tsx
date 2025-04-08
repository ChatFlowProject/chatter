import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl sm:text-6xl font-bold text-center mb-6">
        ChatFlow에 오신 걸 환영합니다 🎉
      </h1>
      <p className="text-lg sm:text-xl text-center mb-10 max-w-xl">
        팀과 친구들이 실시간으로 소통하는 공간,
        <br className="hidden sm:inline" />
        최첨단 채팅 플랫폼 FlowChat에서 경험해보세요.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate('/signup')}
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-medium"
        >
          시작하기
        </button>
        <button
          onClick={() => navigate('/login')}
          className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl font-medium"
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default LandingPage;