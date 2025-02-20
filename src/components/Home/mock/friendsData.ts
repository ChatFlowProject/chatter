// src/data/mockFriendsData.ts

export interface Friend {
  profileImage: string;
  isOnline: string;
  name: string;
  status?: string;
}

export const mockFriendsData: Friend[] = [
  { profileImage: 'nelly', isOnline: 'online', name: 'Nelly' },
  {
    profileImage: 'peppe',
    isOnline: 'idle',
    name: 'Peppe',
    status: '조금 피곤하지만 괜찮아.',
  },
  { profileImage: 'phibi', isOnline: 'dnd', name: 'Phibi' },
  { profileImage: 'cap', isOnline: 'offline', name: 'Cap' },
  { profileImage: 'wumpus', isOnline: 'phone', name: 'Wumpus' },
  {
    profileImage: 'locke',
    isOnline: 'online',
    name: 'Locke',
    status: '커피 한 잔의 여유',
  },
  { profileImage: 'clyde', isOnline: 'idle', name: 'Clyde' },
  { profileImage: 'nelly', isOnline: 'dnd', name: 'Maru' },
  { profileImage: 'peppe', isOnline: 'offline', name: 'Juno' },
  { profileImage: 'phibi', isOnline: 'phone', name: 'Liam' },
  // {
  //   profileImage: 'cap',
  //   isOnline: 'online',
  //   name: 'Eve',
  //   status: '새로운 프로젝트 시작!',
  // },
  // { profileImage: 'wumpus', isOnline: 'idle', name: 'Noah' },
  // {
  //   profileImage: 'locke',
  //   isOnline: 'dnd',
  //   name: 'Sophia',
  //   status: '게임 중이니 말 걸지 마세요',
  // },
  // { profileImage: 'clyde', isOnline: 'offline', name: 'Milo' },
  // { profileImage: 'nelly', isOnline: 'phone', name: 'Zoe' },
  // { profileImage: 'peppe', isOnline: 'online', name: 'Finn' },
  // { profileImage: 'phibi', isOnline: 'idle', name: 'Chloe' },
  // { profileImage: 'cap', isOnline: 'dnd', name: 'Leo' },
  // { profileImage: 'wumpus', isOnline: 'offline', name: 'Isla' },
  // {
  //   profileImage: 'locke',
  //   isOnline: 'phone',
  //   name: 'Oscar',
  //   status: '누군가와 통화 중',
  // },
  // { profileImage: 'clyde', isOnline: 'online', name: 'Ruby' },
  // {
  //   profileImage: 'nelly',
  //   isOnline: 'idle',
  //   name: 'Ethan',
  //   status: '맛있는 거 먹고 싶다',
  // },
  // { profileImage: 'peppe', isOnline: 'dnd', name: 'Aria' },
  // { profileImage: 'phibi', isOnline: 'offline', name: 'Lucas' },
  // { profileImage: 'cap', isOnline: 'phone', name: 'Lily' },
  // { profileImage: 'wumpus', isOnline: 'online', name: 'Elijah' },
  // {
  //   profileImage: 'locke',
  //   isOnline: 'idle',
  //   name: 'Ava',
  //   status: '밀린 드라마 정주행',
  // },
  // { profileImage: 'clyde', isOnline: 'dnd', name: 'Jack' },
  // {
  //   profileImage: 'nelly',
  //   isOnline: 'offline',
  //   name: 'Stella',
  //   status: '조용히 있고 싶은 날',
  // },
  // { profileImage: 'peppe', isOnline: 'phone', name: 'Henry' },
];
