import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1>Welcome Discord!</h1>
      <div>
        <Link to='/login'>login</Link>
      </div>
    </div>
  )
}

export default Home
