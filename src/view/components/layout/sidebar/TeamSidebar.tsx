// 대충 넣은 것
const TeamSidebar = () => {
  return (
    <div className="h-full flex flex-col items-center py-4 space-y-4">
      {[1, 2, 3].map((server) => (
        <div
          key={server}
          className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 cursor-pointer"
        >
          {server}
        </div>
      ))}
    </div>
  );
};

export default TeamSidebar;// src/view/ui/Common/UserProfileBar.tsx