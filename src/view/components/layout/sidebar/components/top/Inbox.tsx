import { useCallback, useRef, useState } from 'react';
import ForYou from './ForYou';
import Mention from './Mention';
import { Archive, Logs, Trash } from 'lucide-react';
import {
  useDeleteAllMyNoti,
  useGetAllMyNoti,
  useGetMention,
} from '@service/feature/noti/hook/useInbox';
import { useIntersectionObserver } from '@service/feature/noti/hook/useIntersectionObserver';
import MoreMenu from './MoreMenu';

export interface Filter {
  isIncludeMention: boolean;
  isIncludeAllServer: boolean;
  teamId: string | undefined;
}

export default function Inbox() {
  const [selected, setSelected] = useState<'myAlarm' | 'unReaded'>('myAlarm');
  const [filter, setFilter] = useState<Filter>({
    isIncludeMention: true,
    isIncludeAllServer: true,
    teamId: undefined,
  });

  const targetRef = useRef<HTMLDivElement | null>(null);

  /**
   * TODO
   * 잘 동작하는지 확인하기
   */

  // 나의 알림 쿼리
  const {
    data: myAlarmData,
    isLoading: isMyAlarmLoading,
    error: myAlarmError,
    fetchNextPage: fetchNextMyAlarm,
    hasNextPage: hasNextMyAlarm,
    isFetchingNextPage: isFetchingNextMyAlarm,
  } = useGetAllMyNoti({
    enabled: selected === 'myAlarm',
  });

  // 읽지 않은 알림 쿼리 (Mention)
  const {
    data: mentionData,
    isLoading: isMentionLoading,
    error: mentionError,
    fetchNextPage: fetchNextMention,
    hasNextPage: hasNextMention,
    isFetchingNextPage: isFetchingNextMention,
  } = useGetMention({
    teamId: filter.teamId,
    includeAllTeams: filter.isIncludeAllServer,
    includeEveryone: filter.isIncludeMention,
    enabled: selected === 'unReaded',
  });

  // 옵저버 콜백
  const fetchNext = useCallback(() => {
    if (selected === 'myAlarm') {
      if (hasNextMyAlarm && !isFetchingNextMyAlarm) {
        fetchNextMyAlarm();
      }
    } else {
      if (hasNextMention && !isFetchingNextMention) {
        fetchNextMention();
      }
    }
  }, [
    selected,
    fetchNextMyAlarm,
    hasNextMyAlarm,
    isFetchingNextMyAlarm,
    fetchNextMention,
    hasNextMention,
    isFetchingNextMention,
  ]);

  // 옵저버 연결
  useIntersectionObserver({
    target: targetRef.current,
    onIntersect: fetchNext,
    threshold: 1.0,
    enabled: selected === 'myAlarm',
  });

  const handleChangeTag = (tag: 'myAlarm' | 'unReaded') => {
    setSelected(tag);
  };

  // 모든 알림 삭제
  const { mutate } = useDeleteAllMyNoti();
  const handleDeleteAllNoti = () => {
    mutate();
  };

  if (
    (selected === 'myAlarm' && isMyAlarmLoading) ||
    (selected === 'unReaded' && isMentionLoading)
  ) {
    return <div>로딩중</div>;
  }

  if (
    (selected === 'myAlarm' && myAlarmError) ||
    (selected === 'unReaded' && mentionError)
  ) {
    return <div>에러</div>;
  }

  /**
   * TODO:
   * 값이 없는 경우 고려
   */

  return (
    <div className='absolute top-[45px] right-[20px] z-10'>
      <div className='bg-[#292B2F] text-white w-[580px] rounded-[8px]'>
        <div className='flex p-4 justify-between'>
          <div className='flex'>
            <Archive className='!w-[20px] !h-[20px] mr-2' />
            <h1 className='text-heading-md font-bold'>받은 편지함</h1>
          </div>
          {selected === 'myAlarm' ? (
            <button
              className='w-8 h-8 p-1 rounded-full hover:bg-[#42454A]'
              onClick={handleDeleteAllNoti}
            >
              <Trash className='hover:text-red' onClick={handleDeleteAllNoti} />
            </button>
          ) : (
            <MoreMenu filter={filter} setFilter={setFilter}>
              <div className='w-8 h-8 p-1 rounded-full hover:bg-[#42454A]'>
                <Logs />
              </div>
            </MoreMenu>
          )}
        </div>
        <div>
          <ul className='flex gap-6 border-b-[2px] border-[#42454A]'>
            <li
              className={`px-4 mb-[-2px] text-[#D4D4D4] font-bold hover:text-white hover:border-b-[2px] hover:border-primary ${selected === 'myAlarm' && 'text-primary border-b-[2px] border-primary'}`}
              onClick={() => handleChangeTag('myAlarm')}
            >
              나의 알림
            </li>
            <li
              className={`px-4 mb-[-2px] text-[#D4D4D4] font-bold hover:text-white hover:border-b-[2px] hover:border-primary ${selected === 'unReaded' && 'text-primary border-b-[2px] border-primary'}`}
              onClick={() => handleChangeTag('unReaded')}
            >
              읽지 않음
            </li>
          </ul>
        </div>
        <div className='overflow-y-auto h-[400px] max-h-[70vh]'>
          {selected === 'myAlarm'
            ? myAlarmData?.pages
                .flatMap((page) => page.content)
                .map((item) => <ForYou data={item} key={item.id} />)
            : mentionData?.pages
                .flatMap((page) => page.content)
                .map((item) => <Mention data={item} key={item.message.id} />)}

          <div ref={targetRef} style={{ height: 1 }} />
        </div>
      </div>
    </div>
  );
}
