import DirectMessages from './DirectMessages'
import HomeNavigation from './HomeNavigation'

const DirectBar = () => {
  return (
    <div className='inline-flex py-[7px] px-2 flex-col items-center bg-[#2F3136]'>
        <div className='flex flex-col justify-center items-center gap-[19px]'>
          <HomeNavigation />
          <DirectMessages />
        </div>
      </div>
  )
}

export default DirectBar
