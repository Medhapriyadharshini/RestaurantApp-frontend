import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';


function ViewRest() {

  const [restDetails, setRestDetails] = useState({})


  // useParams - used to get path parameter from the url
  // const paraId= useParams()
  // console.log(paraId.id);

  // destructure
  const { id } = useParams()
  console.log(id);


  // API call to get the details of the particular restaurant using the path parameter
  const base_url = 'https://restaurant-backend-tocz.onrender.com/restaurants'

  const fetchRestaurant = async() => {
    // const result = await xios.get(`${base_url}/${id}`)
    const result = await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setRestDetails(result.data)
  }

  console.log(restDetails);

  useEffect(() => {
    fetchRestaurant()
  },[])

  return (
    <div>
      <Row>
        <Col>
          <img src={restDetails.photograph} alt="" style={{ width: '450px', height: '450px', margin: '40px' }} />
        </Col>
        <Col>
          <div class='container my-5 p-5'>
            <ListGroup>
              <h1 className='text-center'>{restDetails.name}</h1>
              <ListGroup.Item >Address : {restDetails.address}</ListGroup.Item>
              <ListGroup.Item >Neighborhood : {restDetails.neighborhood}</ListGroup.Item>
              <ListGroup.Item >Cuisine Type : {restDetails.cuisine_type}</ListGroup.Item>
              <ListGroup.Item ><RestOp op={restDetails.operating_hours}/></ListGroup.Item>
              <ListGroup.Item ><RestReview review={restDetails.reviews}/></ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ViewRest