import React from 'react'
import { Link } from 'react-router-dom'


const ErrorPage = () => {
  return (
    <div className='page-100'>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="d-inline-block  mb-2  text-decoration-none" id="footer-link">Home</Link><br/>
      </section>
    </div>
  )
}


export default ErrorPage