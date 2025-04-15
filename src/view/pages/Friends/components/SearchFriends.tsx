import Icon from '@components/common/Icon';

/**
 * TODO
 * 필터링하여 보여줄 수 있도록 수정
 */
const SearchFriends = () => {
  return (
    <div className='flex border border-neutral-500 bg-[#2F3136] mx-4 my-3 px-3 py-[10px] rounded-[8px] focus-within:border-blue-500'>
      <input
        placeholder='검색하기'
        className='bg-inherit flex-1 outline-none'
      />
      <Icon path='search' className='!w-5 !h-5' />
    </div>
  );
};

export default SearchFriends;
