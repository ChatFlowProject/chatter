export default function Alarm({
  img,
  name,
  channel,
  category,
  message,
}: {
  img: string
  name: string
  channel?: string
  category?: string
  message: string
}) {
  return (
    <div className='fixed bottom-2 right-2 flex gap-[8px] p-[12px] w-[220px] bg-[#2f3136] rounded-sm shadow-[0px_0px_41px_0px_rgba(0,0,0,0.34)]'>
      <div className='w-[30px] h-[30px]'>
        <img src={img} className='w-full' />
      </div>
      <div className='gap-[2px] flex flex-col justify-center'>
        <p className='text-white text-[10px] font-medium font-[Ginto]'>
          {name} {channel && `(#${channel}, ${category})`}
        </p>
        <p className='text-[#b9bbbe] text-[8px] font-medium font-[Whitney Semibold]'>
          {message}
        </p>
      </div>
    </div>
  )
}
