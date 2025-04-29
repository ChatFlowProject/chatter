import { useState } from 'react';
import { toast } from 'sonner';
import {
  createTeam,
  deleteTeam,
  getTeamById,
  getTeamList,
  updateTeam,
} from '@service/feature/team/api/teamsServiceAPI.ts';

export const useTeamServiceMutation = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [name, setName] = useState<string>('누구님의 서버');
  const [file, setFile] = useState<File | null>(null);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const handleCreate = async () => {
    if (!name.trim()) {
      toast.error('서버 이름을 입력해주세요.');
      return;
    }

    try {
      const result = await createTeam(name, file ?? undefined);
      toast.success('서버 생성 성공!');
      return result;
    } catch (e) {
    }
  };

  const fetchTeams = async () => {
    try {
      return await getTeamList();
    } catch (e) {}
  };

  const fetchTeamById = async (teamId: string) => {
    try {
      return await getTeamById(teamId);
    } catch (e) {}
  };

  const removeTeam = async (teamId: string) => {
    try {
      await deleteTeam(teamId);
      toast.success('삭제 완료!');
    } catch (e) {}
  };

  const editTeam = async ({ teamId, name, masterId, iconUrl }: {
    teamId: string;
    name: string;
    masterId: string;
    iconUrl?: string;
  }) => {
    try {
      const result = await updateTeam({ teamId, name, masterId, iconUrl });
      toast.success('팀 정보 수정 성공');
      return result;
    } catch (e) {}
  };

  return {
    preview,
    name,
    setName,
    handleChangeFile,
    handleCreate,
    fetchTeams,
    fetchTeamById,
    removeTeam,
    editTeam,
  };
};