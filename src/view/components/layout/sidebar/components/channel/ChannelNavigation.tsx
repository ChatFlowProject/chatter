// import NavigationCard from '@components/layout/sidebar/channel/components/NavigationCard.tsx';

import NavigationCard from './NavigationCard';

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
