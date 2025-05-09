import Alarm from '@components/common/Alarm';
import Icon from '@components/common/Icon';
import { useState } from 'react';
import ForYou from './ForYou';

export default function Inbox() {
  const [selected, setSelected] = useState('myAlarm');

  const handleChangeTag = (tag: 'myAlarm' | 'unReaded') => {
    console.log('???????');
    setSelected(tag);
    console.log('tag:', tag);
  };

  const mockData: {
    notiId: string;
    type: 'FRIEND_REQUES' | 'FRIEND_REQUEST_ACCEPTED';
    time: string;
    userName: string;
    userNotiId: string;
    userNotiProfile: string;
  }[] = [
    // 친구 요청, 친구 승인
    {
      'notiId': '1',
      'type': 'FRIEND_REQUES',
      'time': '2025-03-11T14:40:18.971Z',
      'userName': '최승은',
      'userNotiId': '3fa85f64-5717-4562-b3fc-2c963f66afa6', // 친구 요청한 사람의 ID
      'userNotiProfile':
        'https://cdn.discordapp.com/avatars/341572491879383040/89c45fbf25a2aad1d23d5db9eac33191.webp', // 친구 요청한 사람의 프로필
    },
    {
      'notiId': '2',
      'type': 'FRIEND_REQUEST_ACCEPTED',
      'time': '2025-03-11T14:40:18.971Z',
      'userName': '최승은',
      'userNotiId': '3fa85f64-5717-4562-b3fc-2c963f66afa6', // 친구 요청한 사람의 ID
      'userNotiProfile':
        'https://cdn.discordapp.com/avatars/341572491879383040/89c45fbf25a2aad1d23d5db9eac33191.webp', // 친구 요청한 사람의 프로필
    },
  ];

  return (
    <div className='absolute top-[45px] right-[20px]'>
      <div className='bg-[#292B2F] text-white w-[580px] h-[450px'>
        <div className='flex p-4'>
          <Icon path='inbox' className='!w-[20px] !h-[20px] mr-2' />
          <h1 className='text-heading-md font-bold'>받은 편지함</h1>
        </div>
        <div>
          <ul className='flex gap-6 border-b border-[#42454A]'>
            <li
              className={`px-4 text-[#D4D4D4] hover:text-white hover:border-b hover:border-primary ${selected === 'myAlarm' && 'text-primary border-b border-primary'}`}
              onClick={() => handleChangeTag('myAlarm')}
            >
              나의 알림
            </li>
            <li
              className={`px-4 text-[#D4D4D4] hover:text-white hover:border-b hover:border-primary ${selected === 'unReaded' && 'text-primary border-b border-primary'}`}
              onClick={() => handleChangeTag('unReaded')}
            >
              읽지 않음
            </li>
          </ul>
        </div>
        {/* <div>리스트</div> */}
        {mockData.map((data) => (
          <ForYou data={data} key={data.notiId} />
        ))}
      </div>
      <Alarm img={''} name={'name'} message={'message'} />
    </div>
  );
}
