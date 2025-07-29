// 1. SSEProvider.tsx (Context + Provider)
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import { RootState } from 'src/app/store';
import { SSEMentionResponse, SSEResponse } from '../type/alert';
import Alarm from '@components/common/Alarm';

const SSEContext = createContext<{ events: MessageEvent[] }>({ events: [] });

export const SSEProvider = ({ children }: { children: React.ReactNode }) => {
  const [events, setEvents] = useState<MessageEvent[]>([]);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const eventSource = new EventSource(
      `http://flowchat.shop:30100/sse/subscribe?memberId=${user?.userId}`,
    );
    console.log('eventSource: ', eventSource);

    eventSource.addEventListener('friendRequestNotification', (event) => {
      console.log('[friendRequestNotification] event: ', event);
      const data: SSEResponse = JSON.parse(event.data);
      console.log('[SSE] data: ,', data);

      toast(<Alarm sender={data.sender} text={`친구 요청을 보냈습니다.`} />, {
        style: {
          padding: '12px',
          width: '220px',
          background: '#2e3036',
          borderRadius: '2px',
          boxShadow: '0px 0px 41px 0px rgba(0, 0, 0, 0.34)',
          border: '1px solid #42454A',
        },
      });
    });

    eventSource.addEventListener('friendAcceptNotification', (event) => {
      console.log('[friendAcceptNotification] event: ', event);
      const data: SSEResponse = JSON.parse(event.data);
      console.log('[SSE] data: ,', data);

      toast(
        <Alarm sender={data.sender} text={`친구 요청을 승낙하였습니다.`} />,
        {
          style: {
            padding: '12px',
            width: '220px',
            background: '#2e3036',
            borderRadius: '2px',
            boxShadow: '0px 0px 41px 0px rgba(0, 0, 0, 0.34)',
            border: '1px solid #42454A',
          },
        },
      );
    });

    eventSource.addEventListener('mention', (event) => {
      console.log('[mention] event: ', event);
      const data: SSEMentionResponse = JSON.parse(event.data);
      console.log('[SSE] data: ,', data);

      toast(
        <Alarm
          sender={data.sender}
          message={data.message}
          channel={data.channel}
          team={data.team}
          category={data.category}
        />,
        {
          style: {
            padding: '12px',
            width: '220px',
            background: '#2e3036',
            borderRadius: '2px',
            boxShadow: '0px 0px 41px 0px rgba(0, 0, 0, 0.34)',
            border: '1px solid #42454A',
          },
        },
      );
    });

    eventSource.onmessage = (event) => {
      console.log('[SSE] 도착. event: ', event);
      // setEvents((prev) => [...prev, event]);
      const data = JSON.parse(event.data);
      console.log('[SSE] data: ,', data);
    };

    eventSource.onerror = () => {
      console.log('[SSE] 에러 발생. SSE 종료.');
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <SSEContext.Provider value={{ events }}>{children}</SSEContext.Provider>
  );
};

export const useSSE = () => useContext(SSEContext);
