import NavigationCard from '@components/layout/sidebar/components/channel/NavigationCard.tsx';

const ChannelNavigation = () => {
  const menus = [
    { name: 'Friends', path: '/channels/@me' },
    { name: 'Explore', path: '/channels/explore' },
    { name: 'Nitro', path: '/channels/nitro' },
  ];

  return (
    <div className='flex flex-col w-full items-start gap-[2px]'>
      {menus.map((menu) => (
        <NavigationCard
          key={menu.name}
          path={menu.path}
          route={''}
          iconPath={''}
        >
          {menu.name}
        </NavigationCard>
      ))}
    </div>
  );
};

export default ChannelNavigation;