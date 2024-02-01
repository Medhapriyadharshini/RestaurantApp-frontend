import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
      <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
          <i class="fa fa-cutlery mx-3 fs-4" aria-hidden="true"></i>
            The Curious Plate
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
    </div>
  )
}

export default Header