import React from 'react'
import Nav from './Nav'
import {Link} from 'gatsby'
const Sidebar = () => {
  const closeMenu = () => {
    document.getElementById('mobile-toggle').checked = false
    document.body.classList.remove("no-scroll")
  }
  return (
    <header className="sidebar">
    <div className="sidebar__inner">
      <h1>Connor Norton</h1>

      <Nav />

      <div className="sidebar__social-icons">
        {/* <div className="icon-wrapper">
          <a href="#">
            <svg  viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img">
              <path data-name="layer1"
              d="M43.219 52.156a7.1 7.1 0 0 1-7.406-7.125v-18.25a.5.5 0 0 1 .5-.5h12.125a.5.5 0 0 0 .5-.5v-8.375a.5.5 0 0 0-.5-.5H36.313a.5.5 0 0 1-.5-.5V2.5a.5.5 0 0 0-.5-.5h-8.481a.5.5 0 0 0-.494.494c-.248 11.227-8.912 14.262-10.793 14.79a.491.491 0 0 0-.358.479v8.019a.5.5 0 0 0 .5.5h6.5a.5.5 0 0 1 .5.5v21.624C22.688 55.813 29.531 62 37.875 62c7.251 0 11.67-2.478 12.7-3.127a.5.5 0 0 0 .234-.424v-8.36a.5.5 0 0 0-.833-.372 10.208 10.208 0 0 1-6.757 2.439z"
              fill="white" strokeLinecap="round" strokeMiterlimit="10"
              strokeWidth="2" strokeLinejoin="round"></path>
            </svg>
          </a>
          
        </div>
        <div className="icon-wrapper">
          <a href="https://www.instagram.com/connor1720/">
          <svg viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img">
            <path data-name="layer2"
            d="M44.122 2H19.87A17.875 17.875 0 0 0 2 19.835v24.2a17.875 17.875 0 0 0 17.87 17.834h24.252A17.875 17.875 0 0 0 62 44.034v-24.2A17.875 17.875 0 0 0 44.122 2zM55.96 44.034a11.825 11.825 0 0 1-11.838 11.812H19.87A11.825 11.825 0 0 1 8.032 44.034v-24.2A11.825 11.825 0 0 1 19.87 8.022h24.252A11.825 11.825 0 0 1 55.96 19.835zm0 0"
            fill="white" strokeLinecap="round" strokeMiterlimit="10"
            strokeWidth="2" strokeLinejoin="round"></path>
            <path data-name="layer1" d="M32 16.45a15.484 15.484 0 1 0 15.514 15.484A15.519 15.519 0 0 0 32 16.45zm0 24.95a9.461 9.461 0 1 1 9.482-9.461A9.472 9.472 0 0 1 32 41.4zm19.263-24.834a3.719 3.719 0 1 1-3.719-3.711 3.714 3.714 0 0 1 3.719 3.711zm0 0"
            fill="white"strokeLinecap="round" strokeMiterlimit="10"
            strokeWidth="2" strokeLinejoin="round"></path>
          </svg>
          </a>  
        </div> */}
      </div>
      
      <div className="sidebar__legal">
        <p>Copywrite &copy; 2018</p>
        <p><Link to="/privacy-policy" onClick={closeMenu}>Privacy Policy</Link></p>
      </div>
      </div>
    </header>
  )
}

export default Sidebar
