import React from 'react'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container-fluid d-flex mt-5'>
    <div className="row mt-5">
      <div className="col-md-4 px-md-5 mt-5">
      <h4 className='text-dark'><img src="https://cdn3.paylesser.com/images/36/store/1507793211109_TicketNew-Final-logo.jpg" alt="no image" style={{width:'150px'}} />{' '}
      Ticket New</h4>
      <p style={{textAlign:'justify'}}>Book Movie Tickets online at Ticketnew.com. Select movie and show timing of your choice in the theatre near you. Movie Ticket Booking Excited Cashback Offers.</p>
      </div>
      <div className="col-md-2 justify-content-center mt-5">
        <div>
          <h4>Links</h4>
          <Link to={'/'}><p>Home page</p></Link>
          <Link to={'/Theaters'}><p>Theaters</p></Link>
          <Link to={'/Category'}><p>Orders</p></Link>
        </div>
      </div>
      <div className="col-md-2 justify-content-center mt-5">
      <div>
          <h4>Guides</h4>
          <p className='mt-4'>React</p>
          <p>React Bootstrap</p>
          <p>Bootswatch</p>
        </div>
      </div>
      <div className="col-md-4 px-md-5 mt-5">
        <h4>Contact Us</h4>
<div className='d-md-flex mt-4'>
          <input type="text" placeholder='Email id' className='form-control' />
          <button className='btn btn-warning ms-3'>Subscribe</button>
</div>
        <div className="d-flex justify-content-between mt-4">
      <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
      <FontAwesomeIcon icon={faTwitter} className='fa-2x' />
      <FontAwesomeIcon icon={faFacebook} className='fa-2x' />
      <FontAwesomeIcon icon={faLinkedin} className='fa-2x' />
      <FontAwesomeIcon icon={faWhatsapp} className='fa-2x' />
      </div>
      </div>
    </div>
  </div>
  )
}

export default Footer