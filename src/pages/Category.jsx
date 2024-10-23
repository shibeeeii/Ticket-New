import React from 'react'

function Category() {
  return (
    <div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className='border border-shadow-lg rounded mt-5'>
            <div className='d-flex align-items-center justify-content-center'>
              <img src="https://assetscdn1.paytm.com/movies_new/_next/static/media/brand_logo_lg.40253d4c.png" style={{width:'200px'}} alt="no image"  />
            </div>
            <div className='ms-3 mt-2'>
              <h5 className='text dark ms-3'>Login With Mobile Number</h5>
              <input className='form-control me-3 ms-3 rounded mt-3' style={{width:'80%'}} type="text"  placeholder='Enter Your Mobile Number'/>
            </div>
            <div className='d-flex justify-content-center align-items-center mt-4 mb-5'>
              <button className='btn btn-info text-white fw-5 rounded' style={{width:'50%'}}>Get OTP</button>
            </div>

          </div>
        </div>
        <div className="col-md-3"></div>
      </div>

    </div>
  )
}

export default Category