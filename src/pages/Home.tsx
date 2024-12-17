import React from 'react'
import { Link } from 'react-router-dom'
const Home: React.FC = () => {
  return (
    <div>
      <h1>Wellcome Discord!</h1>
      <div>
        <Link to='/login'>login</Link>
      </div>
    </div>
  )
}

export default Home
