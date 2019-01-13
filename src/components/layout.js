import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Sidebar from './Sidebar'
import '../styles/styles.scss'


class Layout extends React.Component {

  toggleMenu() {
    const isChecked = document.getElementById('mobile-toggle').checked
    const bodyClass = document.body.classList
    if (isChecked) {
      bodyClass.remove("no-scroll")
    } else {
      bodyClass.add("no-scroll")
    }
  }
  closeMenu() {
    document.getElementById('mobile-toggle').checked = false
    document.body.classList.remove("no-scroll")
  }
  componentDidMount() {
    window.addEventListener("resize", this.closeMenu)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.closeMenu)
  }
  render() {
    return (
      <>
      <Helmet
        title='Connor Norton'
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="en" />
      </Helmet>

      <label htmlFor="mobile-toggle" id="mobile-toggle-label" onClick={this.toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <input type="checkbox" id="mobile-toggle" />
      
      <Sidebar />
      <div className='fade-in'>
        {this.props.children}
      </div>
    </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
