import { Search } from 'lucide-react';

const SearchFriends = ({
  setKeyword,
  keyword,
}: {
  setKeyword: (keyword: string) => void;
  keyword: string;
}) => {
  return (
    <div className='flex border border-neutral-500 bg-[#2F3136] mx-4 my-3 px-3 py-[10px] rounded-[8px] focus-within:border-blue-500'>
      <input
        placeholder='검색하기'
        className='bg-inherit flex-1 outline-none'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Search />
    </div>
  );
};

export default SearchFriends;
