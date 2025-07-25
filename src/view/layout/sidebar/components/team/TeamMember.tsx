import { MemberInfo } from '@service/feature/member/types/memberAPI';

const TeamMember = ({
  user,
  isActive = true,
  isMe = false,
}: {
  user: MemberInfo;
  isActive?: boolean;
  isMe?: boolean;
}) => {
  console.log('user 출력: ', user);
  return (
    <div
      className={`flex h-[42px] rounded-[8px] cursor-pointer items-center w-full hover:bg-[#41424b] ${!isActive && 'opacity-[40%] hover:opacity-100'}`}
    >
      <div className='w-8 h-8 my-[5px] ml-2 block items-center justify-center relative mr-3'>
        <div>
          <img
            className='rounded-full'
            src={user.avatarUrl || require('@assets/img/logo/chatflow.png')}
            alt={user.name}
          />
          <div
            className={`absolute right-0 bottom-[-2px] w-[12px] h-[12px] border-2 border-[#2e3036] ${user.state === 'ONLINE' ? 'bg-lime-500' : 'bg-slate-500'} rounded-full`}
          ></div>
        </div>
      </div>
      <div
        className={`flex items-start flex-col justify-center overflow-hidden whitespace-nowrap text-neutral-400 hover:text-white ${isActive && 'text-neutral-200'}`}
      >
        <p className={`w-[151px] text-lg m-0 h-[18px] flex items-center`}>
          {user.name}
        </p>
      </div>
    </div>
  );
};
export default TeamMember;
