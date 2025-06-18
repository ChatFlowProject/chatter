export const SidebarLayout = ({ children }: { children: React.ReactNode }) => (
  <div className='inline-flex py-[7px] px-4 flex-col items-center pt-5 w-full'>
    <div className='flex flex-col justify-center items-center gap-[19px] w-full'>
      {children}
    </div>
  </div>
);
