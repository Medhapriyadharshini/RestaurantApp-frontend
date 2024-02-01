import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function RestCard({ restaurants }) {
  console.log(restaurants);
  return (
    <Link to={`view/${restaurants.id}`} style={{textDecoration:'none'}}>
    <MDBCard className='my-4 mx-3' style={{ height: '500px' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={restaurants.photograph} height={'350px'} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{restaurants.name}</MDBCardTitle>
        <MDBCardText>
          {restaurants.address}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </Link>
  )
}

export default RestCard