import Alarm from '@components/common/Alarm';
import { useState } from 'react';
import ForYou from './ForYou';
import Mention from './Mention';
import { Archive } from 'lucide-react';

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

  const mockUnReadData: {
    id: string;
    content: string;
    channel_id: string;
    team_name: string;
    category_name: string;
    channel_name: string;
    author: {
      id: string;
      username: string;
      avatar: string;
    };
  }[] = [
    {
      id: '1376470941739126794',
      content:
        "# 📢 커리어 4주 프로그램 7기 모집\n\n@everyone  안녕하세요, 커리어코치 박현선입니다. 🙂 \n\n'취업까지 달린다, 코드잇 스프린트!'인 만큼 취업까지 함께 할 수 있도록 4주 기간동안 집중적으로 취업 준비를 할 수 있는 커리어 프로그램을 준비했습니다. 이력서 작성, 현직자 이력서 멘토링, 기술/직무 모의면접까지 단계별 취업 준비를 함께 합니다.\n\n# 📌  커리어 프로그램 상세 페이지\n커리어 프로그램 관련 자세한 내용이 궁금한 분들은 아래 페이지에서\n상세 내용을 확인할 수 있습니다.\n 👉 [커리어 프로그램 자세히 보러가기](<https://sprint-page.codeit.kr/career_program>)\n\n## ✅ 진행 기간\n**2025.06/09 ~ 07/04 (총 4주)**\n\n## ✅ 주차별 커리큘럼 안내\n**__프로그램 신청 시, 4주 간의 일정에 모두 참여해 주셔야 합니다. (세션 선택 참여 불가)__**\n   - 이력서 멘토링과 기술/직무 모의면접은 개인별 일정에 맞춰 조정하여 2주차부터 주 1회 진행됩니다. \n  - OT와 파이널 세션은 정해진 시간에 맞춰 온라인 줌으로 진행되며, 사전에 일정을 안내드릴 예정입니다.\n\n- Week 1 (6/9~6/15) : 이력서 작성 (이력서 작성 커리어 토픽 및 피그마 이력서 템플릿 제공) \n  - OT 및 커리어 코치의 이력서 준비 특강 세션이 있습니다. (채용 담당자의 관점에서 좋은 이력서) \n- Week 2 (6/16~6/22) : 1:1 현직자 이력서 멘토링\n    - 1:1 현직자 이력서 멘토링은 **Week 2-3 동안 총 2회** 진행합니다 (1인당 2회)\n- Week 3 (6/23~6/29) : 1:1 현직자 이력서 멘토링\n- Week 4 (6/30~7/6) : 1:1 기술/직무 모의 면접\n  - 커리어 프로그램 내에서 실제 입사 지원을 진행할 수 있도록 진행합니다. (취업 확률을 빠르게 높일 수 있어요.)\n\n## ✅ 신청 기한\n**2025.05/26~06/01 (일) 23:59**\n\n## ✅  신청 제출 링크\n🔗 [커리어 프로그램 참여 신청서](<https://docs.google.com/forms/d/e/1FAIpQLSfmWh0NOS5o9oprIhkzZ5Z67yptwpCaNXJZQIO_17cMuJiEDQ/viewform?usp=header>)\n- __신청 기한 이후에는 신청이 불가합니다__.\n- __신청 후 참여 취소 혹은 각 세션 불참 시 이후 커리어 프로그램에 참여 불가합니다__.\n\n## ✅ 이런 분께 추천드려요\n- 취업 준비가 처음이라 막막한 분\n- 이력서를 어떻게 작성해야 할 지 감이 잡히지 않는 분\n- 취업 준비를 단계별로, 체계적으로 진행하며 취업 준비 완성도를 높이고 싶은 분\n- 정확한 피드백을 받아 빠르게 입사 지원을 하고, 서류 합격률을 높이고 싶은 분\n\n**[모집 관련 안내] **\n- **프로그램 참여는 1인 1회** 가능하오니, 이번 기간에 참여가 어려울 경우 다음 모집 기간에 신청해주세요.\n- __취업 가능성을 높이기 위해 수료 직후~3개월 이내 참여하는 것을 권장드립니다 🌟 __.\n- 커리어 프로그램은 월별로 진행됩니다.\n- 신청 후 참여 취소 혹은 각 세션 불참 시 이후 커리어 프로그램에 참여 불가합니다.",
      channel_id: '1354395644529348717',
      team_name: '스프린트 플래닛',
      category_name: '스프린트 수료생 커뮤니티',
      channel_name: 'FESI-7기',
      author: {
        id: '1336209615582400523',
        username: 'careercoach_hyun',
        avatar:
          'https://cdn.discordapp.com/avatars/341572491879383040/89c45fbf25a2aad1d23d5db9eac33191.webp',
      },
    },
    {
      id: '1375382054413406248',
      content:
        '@everyone\n🚀 **혼자 코딩하는 시대는 끝났다**\n\n💡 실무에서 바로 통하는 **AX 역량**\n🔥 단 2주, 전문가와 함께 완성하는 **바이브코딩 마스터**\n\n🎯 이제 개발자의 기본은 AX입니다.\n✅ 선착순 오픈특가 진행중 → 33,000원 (70% 할인)\n✅ 앞서가는 개발자라면, 지금 시작하세요.\n\n🧠 이런 분께 추천해요\n- 혼자서 개발하며 성장에 한계를 느낀 분\n- 이제 막 바이브 코딩을 시작하려는 AX 입문 개발자\n- 단순 자동화는 익숙하지만, 코드 품질까지 챙기고 싶은 개발자\n\n📆 라이브 강의: 6월 16일(월) 시작 \n📍 신청 마감: 6월 12일(목)까지 (조기마감 가능)\n\n🔗 지금 바로 확인하기 →  \nhttps://www.wanted.co.kr/events/pre_ax_skillup_01',
      channel_id: '1189760538985635923',
      team_name: '원티드',
      category_name: '원티드 프론트엔드 챌린지',
      channel_name: '정보공유',
      author: {
        id: '1138745036692004885',
        username: 'learning_wantedlab',
        avatar:
          'https://cdn.discordapp.com/avatars/341572491879383040/89c45fbf25a2aad1d23d5db9eac33191.webp',
      },
    },
  ];

  console.log('selected: ', selected);
  return (
    <div className='absolute top-[45px] right-[20px]'>
      <div className='bg-[#292B2F] text-white w-[580px]'>
        <div className='flex p-4'>
          <Archive className='!w-[20px] !h-[20px] mr-2' />
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
        <div className='overflow-y-auto min-h-[400px] max-h-[70vh]'>
          {selected === 'myAlarm'
            ? mockData.map((data) => <ForYou data={data} key={data.notiId} />)
            : mockUnReadData.map((data) => (
                <Mention data={data} key={data.id} />
              ))}
        </div>
      </div>
      <Alarm img={''} name={'name'} message={'message'} />
    </div>
  );
}
