import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div>
        <Carousel>
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block po w-100"
        src="https://d229kpbsb5jevy.cloudfront.net/sony4/videoasset_images/2018_set2_multilang_5june_landscape_thumb.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>2018</h3>
        <p>Directed by Jude Anthany Joseph. With Tovino Thomas, Kunchacko Boban, Asif Ali, Vineeth Sreenivasan..</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block w-100"
        src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/4469/1714808994469-h"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Manjummal Boys</h3>
        <p>Manjummel boys' carefree adventure takes a dangerous turn when one of them plunges into Guna Caves, igniting a test of unity in a gripping fight for survival.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block w-100"
        src="https://d229kpbsb5jevy.cloudfront.net/sony4/videoasset_images/chaveer_malayalam_landscape_thumb.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Chaver</h3>
        <p>
        Chaaver is a 2023 Malayalam political action thriller film starring Kunchacko Boban and Arjun Ashokan.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <div className='bg-primary w-100 d-flex align-item-center justify-content-center mt-4'>
    <a className='row' href=""><span className='text-light col-md-12'><FontAwesomeIcon icon={faBullhorn} style={{color: "#ffffff",}} className='me-3' />Exsiting News! We're Now Part Of Zomato Fam !</span></a>
  </div>

<div className="row ms-5 mt-3 mb-5">
      <div className="col-md-3 ">
        <h2>Languages</h2>
        <div className='mt-4'>
          <Form.Group className="mb-3 fs-5">
          <Form.Check
            required
            label="Malayalam"
          />
        </Form.Group>
        <Form.Group className="mb-3 fs-5">
          <Form.Check
            required
            label="Hindi"
          />
        </Form.Group>
        <Form.Group className="mb-3 fs-5">
          <Form.Check
            required
            label="Tamil"
          />
        </Form.Group>
        <Form.Group className="mb-3 fs-5">
          <Form.Check
            required
            label="Telugu"
          />
        </Form.Group>
        <Form.Group className="mb-3 fs-5">
          <Form.Check
            required
            label="Bangali"
          />
        </Form.Group>
        <Form.Group className="mb-3 fs-5">
          <Form.Check
            required
            label="Marathi"
          />
        </Form.Group>
        <Form.Group className="mb-3 fs-5">
          <Form.Check
            required
            label="Kannada"
          />
        </Form.Group>
        </div>
      </div>
        <div className="col-md-3 mt-5">
        <Card style={{ width: '80%', height:'350px' }}>
      <Card.Img variant="top" src="https://assetscdn1.paytm.com/images/cinema/Bougainvillea--608x800-2-2f47d7e0-7f0b-11ef-816e-6191a0b38ee0.jpg?format=webp&imwidth=576" />
      <Card.Body className='d-flex justify-content-between'>
        <Card.Title>Bougainvillea</Card.Title>
        <Button variant="info">Book Now</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-3 mt-5">
        <Card style={{ width: '80%', height:'350px' }}>
      <Card.Img variant="top" src="https://assetscdn1.paytm.com/images/cinema/Vettaiyan--608x800-e51b1660-8481-11ef-a9f3-bb0df457e7e9.jpg?format=webp&imwidth=576" />
      <Card.Body className='d-flex justify-content-between'>
        <Card.Title>Vettaiyan</Card.Title>
        <Button variant="info">Book Now</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-3 mt-5">
        <Card style={{ width: '80%', height:'350px' }}>
      <Card.Img variant="top" src="https://assetscdn1.paytm.com/images/cinema/ARM-without-608x800-2-6261d310-7290-11ef-a960-5b18cf0f9ec1.jpg?format=webp&imwidth=576" />
      <Card.Body className='d-flex justify-content-between'>
        <Card.Title>ARM</Card.Title>
        <Button variant="info">Book Now</Button>
      </Card.Body>
    </Card>
        </div>
      
    </div>

    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10 mt-5 border border-shadow rounded bg-light">
        <div><h2 className='mt-5'>Explore Latest Movies By Languages</h2></div>
        <div className='d-flex justify-content-around mt-5 mb-5 row'>
          <div className='col-md-12 ms-2 me-2'>
            <button className='btn btn-light border border-dark rounded me-4 mt-3'>Malayalam Movies</button>
            <button className='btn btn-light border border-dark rounded me-4 mt-3'>Tamil Movies</button>
            <button className='btn btn-light border border-dark rounded me-4 mt-3'>Hindi Movies</button>
            <button className='btn btn-light border border-dark rounded me-4 mt-3'>Kannada Movies</button>
            <button className='btn btn-light border border-dark rounded me-4 mt-3'>Telugu Movies</button>
            <button className='btn btn-light border border-dark rounded me-4 mt-3'>English Movies</button>
            <button className='btn btn-light border border-dark rounded me-4 mt-3'>Marathi Movies</button>
            <button className='btn btn-light border border-dark rounded me-4 mt-3'>Bangali Movies</button>
          </div>

          </div>

      </div>
      <div className="col-md-1"></div>
    </div>
    <div className="row ms-5 mt-4 mb-5">
    <h1 className='text-center'>Upcoming Movies</h1>
      <div className="col-md-3 mt-3 mb-5">
      <Card style={{ width: '80%', height:'250px' }}>
      <Card.Img variant="top" src="https://assetscdn1.paytm.com/images/cinema/164851-aa6a8550-4296-11ef-99b5-d35223c98590.jpg?format=webp&imwidth=582" />
      <Card.Body>
        <Card.Title>Lucky Basker</Card.Title>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-3 mt-3 mb-5">
      <Card style={{ width: '80%', height:'250px' }}>
      <Card.Img variant="top" src="https://assetscdn1.paytm.com/images/cinema/Brother--608x800-b32d7420-6052-11ef-907b-a74c57be3177.jpg?format=webp&imwidth=582" />
      <Card.Body>
        <Card.Title>Brother</Card.Title>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-3 mt-3 mb-5">
      <Card style={{ width: '80%', height:'250px' }}>
      <Card.Img variant="top" src="https://assetscdn1.paytm.com/images/cinema/Amaran-608x800-3b60ca10-4594-11ef-83ec-5d141d381675.jpg?format=webp&imwidth=582" />
      <Card.Body>
        <Card.Title>Amaran</Card.Title>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-3 mt-3 mb-5">
      <Card style={{ width: '80%', height:'250px' }}>
      <Card.Img variant="top" src="https://assetscdn1.paytm.com/images/cinema/blodd-ed697430-6f76-11ef-9863-5b37bda1f409.jpeg?format=webp&imwidth=582" />
      <Card.Body>
        <Card.Title>Bloody Beggar</Card.Title>
      </Card.Body>
    </Card>
        </div>

    </div>


    </div>
    
  )
}

export default Home