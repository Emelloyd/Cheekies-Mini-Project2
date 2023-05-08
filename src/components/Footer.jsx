import React from 'react'

const Footer = () => {
  return (
    <div className='container footer'>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Cheekies </span>
      </h5>
      <h5>All rights reserved</h5>
    </div>
  )
}

export default Footer;