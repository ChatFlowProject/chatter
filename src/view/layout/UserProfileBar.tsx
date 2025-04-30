// 대충 임시
const UserProfileBar = () => {
  return (
    <div className="h-16 flex items-center justify-between px-4 border-t border-gray-600 bg-chat">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-500 rounded-full" />
        <div>
          <div className="text-sm font-medium">Chloe</div>
          <div className="text-xs text-gray-400">Online</div>
        </div>
      </div>
      <div className="text-gray-400">⚙️</div>
    </div>
  );
};

export default UserProfileBar;