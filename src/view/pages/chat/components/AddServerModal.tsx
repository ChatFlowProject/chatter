import { useRef, useState } from 'react';
import Modal from '@components/common/Modal';
import ChatServer from '@service/feature/team/ChatServer.tsx';
import { useCreateTeamMutation } from '@service/feature/team/hook/mutation/useCreateTeamMutation.ts';
import { toast } from 'sonner';

export default function AddServerModal() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [name, setName] = useState<string>('누구님의 서버');
  const [file, setFile] = useState<File | null>(null);

  const createTeamMutation = useCreateTeamMutation();

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const handleClickAddServer = () => {
    inputRef.current?.click();
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      return toast.error('서버 이름을 입력해주세요.');
    }
    createTeamMutation.mutate({ name, file: file ?? undefined });
  };

  return (
    <Modal.Root>
      <Modal.Trigger>
        <ChatServer isActive={false} onClick={handleClickAddServer} title="추가" />
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title isCloseBtn className="m-auto font-bold">
              서버 커스터마이즈하기
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Modal.Label className="text-center">
              새로운 서버에 이름과 아이콘을 부여해 개성을 드러내 보세요. 나중에 언제든 바꿀 수 있어요.
            </Modal.Label>
            <div
              onClick={handleClickAddServer}
              className="relative w-24 h-24 border-2 border-dashed border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-800 transition m-auto"
            >
              {preview ? (
                <img src={preview} alt="preview" className="w-full h-full object-cover rounded-full" />
              ) : (
                <>
                  <div className="text-gray-400 text-sm">UPLOAD</div>
                  <div className="absolute top-0 right-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                    +
                  </div>
                </>
              )}
            </div>
            <input type="file" accept="image/*" ref={inputRef} onChange={handleChangeFile} className="hidden" />
            <Modal.ShortText label="서버 이름" setValue={setName}>
              {name}
            </Modal.ShortText>
          </Modal.Body>
          <Modal.Footer onSubmit={handleSubmit} backBtnText="뒤로 가기" submitBtnText="만들기" />
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  );
}