export default function FriendsPage(){
  return (
    // 임시
    <div className="flex flex-col h-screen bg-[#18191C]">
      <div className="flex items-center justify-between p-4 bg-[#242526]">
        <h1 className="text-white text-2xl">Friends</h1>
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        {/* Add your friends list or content here */}
        <p className="text-white">List of friends will be displayed here.</p>
      </div>
    </div>
  );
}