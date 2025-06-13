import { useState } from 'react';
import { toast } from 'sonner';
import { postImage } from '@service/feature/image/imageApi';

export const useTeamUIService = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [name, setName] = useState<string>('Chat Flow 서버');
  const [iconUrl, setIconUrl] = useState<string | null>(null);

  const handleChangeIconUrl = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const uploadedUrl = await postImage(formData);
      setIconUrl(uploadedUrl);
    } catch (error) {
      toast.error('이미지 업로드에 실패했습니다.');
    }
  };

  return {
    preview,
    name,
    iconUrl,
    setName,
    handleChangeIconUrl,
  };
};