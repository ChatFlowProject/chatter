import { useState } from 'react';
import { useAddFriend } from 'src/service/feature/friend/hook/useFriendQuery';

const AddFriend = () => {
  const [value, setValue] = useState('');
  const [resultMessage, setResultMessage] = useState<{
    type: string;
    message: string;
  } | null>(null);
  const { mutate } = useAddFriend(setResultMessage);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResultMessage(null);
    mutate(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResultMessage(null);
    setValue(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='border-b border-[#3E4147] px-[30px] py-[20px]'
    >
      <h2 className='text-[20px] font-bold mb-2'>친구 추가하기</h2>
      <h3>Discord 사용자명을 사용하여 친구를 추가할 수 있어요.</h3>
      <div
        className={`bg-[#2F3136] flex mt-4 px-3 h-[54px] items-center rounded-[8px] focus-within:border focus-within:border-primary ${resultMessage?.type === 'error' && 'border !border-red'} ${resultMessage?.type === 'success' && ' border !border-blue-500'}`}
      >
        <input
          placeholder='Discord 사용자명을 사용하여 친구를 추가할 수 있어요.'
          className='flex-1 bg-inherit outline-none'
          onChange={handleChange}
        />
        <button className='bg-primary px-4 py-[2px] h-[32px] rounded-[8px] font-bold'>
          친구 요청 보내기
        </button>
      </div>
      {resultMessage && (
        <p
          className={`text-text-md mt-[8px] ${resultMessage.type === 'error' ? 'text-red' : 'text-blue-500'}`}
        >
          {resultMessage.message}
        </p>
      )}
    </form>
  );
};

export default AddFriend;
