import React from 'react'
import { Link } from 'react-router-dom'

function Theaters() {
  return (
    <div>
        <div className='row w-100'>
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <div className='border border-shadow rounded mt-5'>
                    <h1 className='text-center mt-5'>Theaters in Palakkad</h1>
<div className='d-flex ms-5'>
                        <div className='ms-5'>
                            <h4>Mannarkkad
                            </h4>
                            <p>EMV Cinemas A/C</p>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Link to={'/category'}><button className='btn btn-warning rounded ms-5' style={{height:'40px'}}>Book Now</button></Link></div>
</div>
<div className='d-flex ms-5'>
                        <div className='ms-5'>
                            <h4>Kollengode
                            </h4>
                            <p>Tenor Cinemas A/C</p>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                           <Link to={'/category'}> <button className='btn btn-warning rounded ms-5' style={{height:'40px'}}>Book Now</button></Link></div>
</div>
<div className='d-flex ms-5'>
                        <div className='ms-5'>
                            <h4>Palakkad
                            </h4>
                            <p>Evm Cinemaas A/C</p>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Link to={'/category'}><button className='btn btn-warning rounded ms-5' style={{height:'40px'}}>Book Now</button></Link></div>
</div>
                </div>

            </div>
            <div className="col-md-2"></div>

        </div>

    </div>
  )
}

export default Theaters