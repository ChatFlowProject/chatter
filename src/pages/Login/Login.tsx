import Modal from '@components/Modal'
import LoginForm from './components/LoginForm'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='w-[530px] bg-[#313237] p-8 rounded-[5px] shadow-[0px_2px_10px_#00000033]'>
      <div className='text-center mb-6'>
        <h1 className='text-[22.5px] font-semibold text-[#f2f2f4] mb-2'>
          돌아오신 것을 환영해요!
        </h1>
        <p className='text-[15px] text-[#b5b9c0]'>
          다시 만나다니 너무 반가워요!
        </p>
      </div>
      <LoginForm />
      <p className='text-[13.6px] text-left text-[#949aa3] mt-2'>
        계정이 필요하신가요?{' '}
        <Link to='/signup' className='text-[#00a9fb] hover:underline'>
          가입하기
        </Link>
      </p>
      <div className='p-10 bg-white'>
        <Modal.Root>
          <Modal.Header>
            <Modal.Title profile='123' isCloseBtn>
              Title
            </Modal.Title>
            <Modal.Warning>
              This form will be submitted to App. Do not share passwords or
              sensitive information
            </Modal.Warning>
          </Modal.Header>
          <Modal.Body>
            <Modal.Label>Description</Modal.Label>
            <Modal.LongText />
          </Modal.Body>
          <Modal.Footer />
        </Modal.Root>

        <Modal.Root>
          <Modal.Header>
            <Modal.Title>Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Modal.Label>ENTER DISCORD AUTH CODE</Modal.Label>
            <Modal.ShortText />
          </Modal.Body>
          <Modal.Footer />
        </Modal.Root>

        <Modal.Root>
          <Modal.Header>
            <Modal.Title>Title</Modal.Title>
            <Modal.Description>Description</Modal.Description>
          </Modal.Header>

          <Modal.Footer />
        </Modal.Root>

        <Modal.Root>
          <Modal.Header>
            <Modal.Title>Title</Modal.Title>
            <Modal.Description>Description</Modal.Description>
          </Modal.Header>
          <Modal.Body>
            <Modal.Profile
              profile='123'
              name='Muatex'
              date='Today at 09:41'
              message='Message'
            />
            <Modal.ProTip>Descrption</Modal.ProTip>
          </Modal.Body>

          <Modal.Footer />
        </Modal.Root>
      </div>
    </div>
  )
}

export default Login
