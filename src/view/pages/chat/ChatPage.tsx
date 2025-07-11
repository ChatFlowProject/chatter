import { useMessageHistory } from "@service/feature/chat";
import { useChat } from "@service/feature/chat/hook/useChat.ts";
import { ChatMessage } from "@service/feature/chat/schema/messageSchema.ts";
import { useState, useCallback, useEffect, useMemo } from "react";
import { ChannelHeader } from "./components/layout/ChannelHeader";
import { ChatInput } from "@pages/chat/components/layout/ChatInput.tsx";
import { ChatView } from "@pages/chat/components/layout/ChatView.tsx";
import { postImage } from "@service/feature/image/imageApi.ts";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import { useTeamDetailQuery } from "@service/feature/team/hook/query/useTeamServiceQuery.ts";
import { useSelector } from "react-redux";
import { ChannelMember } from "@service/feature/channel/types/channel.ts";

export function ChatPage() {
  const { serverId, channelId } = useParams<{ serverId: string; channelId: string }>();

  const { data: messagesData = [], isLoading, error } = useMessageHistory(channelId);
  const { data: teamData, isLoading: isTeamLoading, error: teamError } = useTeamDetailQuery(serverId);

  const myInfo = useSelector((state: any) => state.auth.user);
  const [localMessages, setLocalMessages] = useState<ChatMessage[]>([]);

  const currentUser = useMemo(() => {
    return teamData?.teamMembers?.find(
      (member: { memberInfo: { id: string }; }) => member.memberInfo.id === myInfo?.userId
    )?.memberInfo;
  }, [teamData, myInfo]);

  useEffect(() => {
    setLocalMessages([]);
  }, [channelId]);

  useEffect(() => {
    if (Array.isArray(messagesData) && messagesData.length > 0) {
      setLocalMessages(messagesData);
    }
  }, [messagesData]);

  console.log(useMessageHistory(channelId));
  console.log(messagesData);

  const handleNewMessage = useCallback((msg: ChatMessage) => {
    setLocalMessages((prev) => {
      if (msg.tempId) {
        return prev.map((m) =>
          m.tempId === msg.tempId ? { ...msg, status: "sent" as const } : m
        );
      }
      return [...prev, msg];
    });
  }, []);

  const { sendMessage } = useChat(channelId, handleNewMessage);

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      return await postImage(formData);
    } catch (error) {
      toast.error("이미지 업로드 실패:");
      throw error;
    }
  };

  const handleSend = async (text: string, mentionsOrFiles?: string[] | File[]) => {
    let mentionList: string[] = [];
    let fileList: File[] = [];

    if (Array.isArray(mentionsOrFiles)) {
      if (typeof mentionsOrFiles[0] === "string") {
        mentionList = mentionsOrFiles as string[];
      } else {
        fileList = mentionsOrFiles as File[];
      }
    }

    let imageUrls: string[] = [];
    if (fileList.length > 0) {
      const uploadPromises = fileList.map((file) => uploadImage(file));
      imageUrls = await Promise.all(uploadPromises);
    }

    const tempMessage: ChatMessage = {
      tempId: uuidv4(),
      sender: {
        memberId: currentUser?.id || "",
        name: currentUser?.name || "알 수 없음",
        avatarUrl: currentUser?.avatarUrl || "",
      },
      content: text,
      createdAt: new Date().toISOString(),
      isUpdated: false,
      isDeleted: false,
      status: "pending",
      attachments:
        imageUrls.length > 0
          ? imageUrls.map((url) => ({ type: "image" as const, url }))
          : [],
      mentions: mentionList,
      messageId: 0,
    };

    setLocalMessages((prev) => [...prev, tempMessage]);

    try {
      await sendMessage(text, tempMessage.attachments);
    } catch (error) {
      setLocalMessages((prev) =>
        prev.map((msg) =>
          msg.tempId === tempMessage.tempId
            ? { ...msg, status: "error" as const }
            : msg
        )
      );
      console.error("메시지 전송 실패:", error);
    }
  };

  if (isLoading || isTeamLoading) return (
      <div className="flex h-full items-center justify-center text-white">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        <span className="ml-3">로딩 중...</span>
      </div>
  );
  if (error || teamError) return (
      <div className="flex h-full items-center justify-center text-red-500 bg-red-100/10 rounded-lg p-4">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
        <span>에러 발생: {error?.message || teamError?.message}</span>
      </div>
  );

  const teamIcon = teamData?.team?.iconUrl;
  const teamName = teamData?.team?.name || "기본 서버 이름";
  const categories = teamData?.categoriesView || [];
  const members =
    teamData?.teamMembers?.map((member: { memberInfo: ChannelMember }) => member.memberInfo) || [];

  return (
    <div className="flex h-full flex-col bg-chat text-white">
      <ChannelHeader channelName={teamName || "일반"} iconUrl={teamIcon} />
      <ChatView messages={localMessages} myId={myInfo?.userId} categories={categories} />
      <ChatInput onSend={handleSend} users={members || []} />
    </div>
  );
}