import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
  <nav className="nav">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li>
        <Link to="/poetry">Poetry</Link>
        <ul className="collections-nav">
          <li><Link to="/collection-1">Collection 1 longer title</Link></li>
          <li><Link to="/collection-2">Collection 2</Link></li>
        </ul>
      </li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
)

export default Nav