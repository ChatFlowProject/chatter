import NavigationCard from './NavigationCard';

const ChannelNavigation = () => {
  const menus = [
    { name: 'Friends', path: '/channels/@me', iconPath: 'friends' },
  ];

  return (
    <div className='flex flex-col w-full items-start gap-[2px]'>
      {menus.map((menu) => (
        <NavigationCard
          key={menu.name}
          path={menu.path}
          route={''}
          iconPath={menu.iconPath}
        >
          {menu.name}
        </NavigationCard>
      ))}
    </div>
  );
};

export default ChannelNavigation;
