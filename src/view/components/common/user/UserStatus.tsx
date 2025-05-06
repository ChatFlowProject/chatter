interface UserStatusProps {
  status: 'ONLINE' | 'OFFLINE' | 'IDLE' | 'DO_NOT_DISTURB';
}

const statusMap = {
  ONLINE: '온라인',
  OFFLINE: '오프라인',
  IDLE: '자리비움',
  DO_NOT_DISTURB: '방해금지',
};

const UserStatus = ({ status }: UserStatusProps) => {
  return (
    <div className="text-xs text-gray-400">
      {statusMap[status] || '상태 없음'}
    </div>
  );
};

export default UserStatus;