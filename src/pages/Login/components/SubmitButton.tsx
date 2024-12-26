interface ButtonProps {
  text: string
}

function SubmitButton({ text }: ButtonProps) {
  return (
    <button
      type='submit'
      className='w-full bg-[#5865f2] hover:bg-blue-700 rounded text-white py-2'
    >
      {text}
    </button>
  )
}

export default SubmitButton
