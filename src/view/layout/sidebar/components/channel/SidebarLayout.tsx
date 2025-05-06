export const SidebarLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex py-[7px] px-2 flex-col items-center pt-5">
    <div className="flex flex-col justify-center items-center gap-[19px]">
      {children}
    </div>
  </div>
);