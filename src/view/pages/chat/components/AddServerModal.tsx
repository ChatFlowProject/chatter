import { useRef, useState } from 'react';
import axios from 'axios';

import Modal from '@components/common/Modal';
import ChatServer from '../../../../service/feature/team/ChatServer.tsx';

export default function AddServerModal() {
  const [preview, setPreview] = useState<string | null>(null);
  const [name, setName] = useState<string>('누구님의 서버');

  console.log('서버 추가 보이냐');

  const inputRef = useRef<HTMLInputElement | null>(null);
  const fileRef = useRef<File | null>(null); // 이미지 실제 파일

  const handleClickAddServer = () => {};

  const handleSubmit = async () => {
    // 백엔드에서 multipart/form-data를 받을 수 있어야 해.
    if (!name.trim()) {
      alert('서버 이름을 입력해주세요.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      if (fileRef.current) {
        formData.append('icon', fileRef.current);
      }

      const response = await axios.post('/api/servers', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('서버 생성 성공', response.data);
      // TODO: 성공 시 모달 닫거나 페이지 이동 등의 후속 처리
    } catch (error) {
      console.error('서버 생성 실패', error);
      alert('서버 생성에 실패했습니다.');
    }
  };

  // 이미지 변경
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };
  const handleClick = () => {
    inputRef.current?.click();
  };
  return (
    <Modal.Root>
      <Modal.Trigger>
        <ChatServer
          isActive={false}
          onClick={handleClickAddServer}
          title={'추가'}
        />
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title isCloseBtn className='m-auto font-bold'>
              서버 커스터마이즈하기
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Modal.Label className='text-center'>
              새로운 서버에 이름과 아이콘을 부여해 개성을 드러내 보세요. 나중에
              언제든 바꿀 수 있어요.
            </Modal.Label>
            <div
              onClick={handleClick}
              className='relative w-24 h-24 border-2 border-dashed border-gray-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-800 transition m-auto'
            >
              {preview ? (
                <img
                  src={preview}
                  alt='preview'
                  className='w-full h-full object-cover rounded-full'
                />
              ) : (
                <>
                  <div className='text-gray-400 text-sm'>UPLOAD</div>
                  <div className='absolute top-0 right-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-lg font-bold'>
                    +
                  </div>
                </>
              )}
            </div>
            <input
              type='file'
              accept='image/*'
              ref={inputRef}
              onChange={handleChange}
              className='hidden'
            />
            <Modal.ShortText label='서버 이름' setValue={setName}>
              {name}
            </Modal.ShortText>
          </Modal.Body>
          <Modal.Footer
            onSubmit={handleSubmit}
            backBtnText='뒤로 가기'
            submitBtnText='만들기'
          />
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  );
}
