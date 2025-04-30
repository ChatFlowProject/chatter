import { useState } from 'react';
import { Mic, MicOff, Headphones, HeadphoneOff, Settings } from 'lucide-react';

const iconClass = 'w-4 h-4 text-gray-400 hover:text-white transition cursor-pointer';

const UserVoiceControls = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isDeafened, setIsDeafened] = useState(false);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    // TODO: WebRTC나 오디오 스트림 제어 연결
  };

  const toggleDeafen = () => {
    setIsDeafened((prev) => !prev);
    // TODO: 전체 오디오 입력/출력 제어 연결
  };

  const handleSettings = () => {
    // TODO: 사용자 설정 이동 or 모달 열기
    console.log('설정 열기');
  };

  return (
    <div className="flex items-center gap-4 ml-4">
      <button onClick={toggleMute} className={iconClass} title={isMuted ? 'Unmute' : 'Mute'}>
        {isMuted ? <MicOff /> : <Mic />}
      </button>
      <button onClick={toggleDeafen} className={iconClass} title={isDeafened ? 'Undeafen' : 'Deafen'}>
        {isDeafened ? <HeadphoneOff /> : <Headphones />}
      </button>
      <button onClick={handleSettings} className={iconClass} title="Settings">
        <Settings />
      </button>
    </div>
  );
};

export default UserVoiceControls;