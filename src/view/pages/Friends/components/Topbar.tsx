import Navigation from './Navigation.tsx';

const Topbar = () => {
  return (
    <div className='inline-flex h-[50px] justify-center items-start flex-shrink-0'>
      <Navigation
        activeButton={null}
        setActiveButton={function (
        ): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  );
};

export default Topbar;
