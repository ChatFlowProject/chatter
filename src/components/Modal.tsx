import Profile from '../assets/profile.svg'

interface ModalProps {}

export default function Modal({}: ModalProps) {
  return (
    <div className='w-[22.0625rem] bg-[#36393F] shadow-[0px_5px_20px_0px_rgba(0,0,0,0.2)] rounded-[4px]'>
      <div className='p-[0.75rem] pb-0'>
        <div>
          <h2 className='font-display text-white mb-[5px]'>Title</h2>
          <p className='font-medium text-[#B9BBBE] text-sm'>Description</p>
        </div>
        <div className='my-[1.12rem] flex p-[0.56rem] border border-[#2A2C31] rounded-[0.1875rem] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.10)]'>
          <div className='w-[36px] h-[36px]'>
            <img className='w-fill' src={Profile} alt='profile' />
          </div>
          <div className='ml-[0.56rem]'>
            <div className='flex gap-[7px]'>
              <p className='font-medium text-[11px] text-[#FF5688]'>Muatex</p>
              <p className='font-medium text-[#72767D] text-[9px]'>
                Today at 09:41
              </p>
            </div>
            <p className='text-des text-[11px] font-medium'>Message</p>
          </div>
        </div>
        <div>
          <h3 className='text-[#3BA55C] font-display text-[11px] font-medium'>
            PROTIP
          </h3>
          <p className='text-[#8E9297] font-display text-[10px] font-medium'>
            Description
          </p>
        </div>
      </div>
      <div className='mt-[31px] h-[48px] flex bg-[#2F3136] px-[0.75rem] justify-between items-center rounded-b-[4px]'>
        <button className='text-[#DCDDDE] text-[10px] px-[0.94rem] py-[0.5rem] rounded-[0.13275rem] hover:bg-[#404249]'>
          Back
        </button>
        <div className='flex'>
          <button className='text-[#DCDDDE] text-[10px] px-[0.94rem] mr-[0.5rem] rounded-[0.13275rem] pr-[1.06rem] hover:bg-[#404249]'>
            Cancel
          </button>
          <button className='bg-[#5865F2] text-white px-[0.94rem] py-[0.5rem] rounded-[0.13275rem] text-[10px] hover:bg-[#4752C4]'>
            Okay
          </button>
        </div>
      </div>
    </div>
  )
}
