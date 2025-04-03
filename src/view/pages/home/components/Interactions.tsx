import { useState } from 'react';
import Icon from './Icon';

const Interactions = () => {
  const [mute, setMute] = useState(false);
  const [deafen, setDeafen] = useState(false);

  const handleMute = () => {
    setMute(!mute);
  };

  const handleDeafen = () => {
    setDeafen(!deafen);
  };

  const handleSetting = () => {
    console.log('setting 페이지로 이동');
  };

  return (
    <div className='ml-[47px] inline-flex justify-center items-center gap-[17px]'>
      <div className='w-[14px] h-[14px]' onClick={handleMute}>
        {mute ? <Icon path='unmute' /> : <Icon path='mute' />}
      </div>
      <div className='w-[14px] h-[14px]' onClick={handleDeafen}>
        {deafen ? <Icon path='undeafen' /> : <Icon path='deafen' />}
      </div>
      <div className='w-[14px] h-[14px]' onClick={handleSetting}>
        <Icon path='settings' />
      </div>
    </div>
  );
};

export default Interactions;
