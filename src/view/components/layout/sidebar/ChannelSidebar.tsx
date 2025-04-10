// import DirectBar from '@pages/landing/components/DirectBar';

import DirectBar from './component/right/DirectBar';

// 대충 넣은것
const ChannelSidebar = () => {
  return (
    // <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
    //   <div className="text-sm font-semibold text-gray-400">TEXT CHANNELS</div>
    //   {[1, 2, 3].map((channel) => (
    //     <div
    //       key={channel}
    //       className="text-white hover:bg-gray-600 px-2 py-1 rounded cursor-pointer"
    //     >
    //       # general-{channel}
    //     </div>
    //   ))}
    // </div>
    <DirectBar />
  );
};

export default ChannelSidebar;
