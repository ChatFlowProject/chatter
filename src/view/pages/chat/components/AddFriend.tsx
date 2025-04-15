import { useState } from 'react';
import { useAddFriend } from 'src/service/feature/friend/hook/useFriendQuery';

const AddFriend = () => {
  const { mutate } = useAddFriend();

  const [value, setValue] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='border-b border-[#3E4147] px-[30px] py-[20px]'
    >
      <h2 className='text-[20px] font-bold mb-2'>친구 추가하기</h2>
      <h3>Discord 사용자명을 사용하여 친구를 추가할 수 있어요.</h3>
      <div className='bg-[#2F3136] flex mt-4 px-3 h-[54px] items-center rounded-[8px] focus-within:outline focus-within:outline-2 focus-within:outline-primary'>
        <input
          placeholder='Discord 사용자명을 사용하여 친구를 추가할 수 있어요.'
          onChange={(e) => setValue(e.target.value)}
          className='flex-1 bg-inherit outline-none'
        />
        <button className='bg-primary px-4 py-[2px] h-[32px] rounded-[8px] font-bold'>
          친구 요청 보내기
        </button>
      </div>
    </form>
  );
};

export default AddFriend;
