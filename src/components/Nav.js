import React from 'react'
import { Link } from 'gatsby'

class Nav extends React.Component {
  closeMenu() {
    document.getElementById('mobile-toggle').checked = false
    document.body.classList.remove("no-scroll")
  }
  render() {
    return (
      <nav className="nav">
        <ul>
          <li><Link to="/" onClick={this.closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={this.closeMenu}>About</Link></li>
          <li>
            <Link to="/poetry" onClick={this.closeMenu}>Poetry</Link>
            {/* <ul className="collections-nav">
              <li><Link to="/collection-1">Collection 1 longer title</Link></li>
              <li><Link to="/collection-2">Collection 2</Link></li>
            </ul> */}
          </li>
          <li><Link to="/contact" onClick={this.closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav