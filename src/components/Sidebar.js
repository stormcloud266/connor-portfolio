import React from 'react'
import Nav from './Nav'

const Sidebar = () => (
  <header className="sidebar">
  <div className="sidebar__inner">
    

  
    <h1>Connor Norton</h1>

    <Nav />

    <div className="sidebar__social-icons">
      <div className="icon-wrapper">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      </div>
      <div className="icon-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>
      </div>
    </div>
    <div className="sidebar__legal">
      <p>Copywrite 2018</p>
      <p>Privacy Policy</p>
    </div>
    </div>
  </header>
)

export default Sidebar
