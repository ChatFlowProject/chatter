import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Welcome() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/login')
  }, [])

  return <div></div>
}
