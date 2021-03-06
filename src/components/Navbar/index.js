import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  </>
)
