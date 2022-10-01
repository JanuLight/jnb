import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function SelectList(){
    
    return(
        <>
       <Container>
           <br></br>
      <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Select</th>
      <th scope="col">Student ID</th>
      <th scope="col">Student Name</th>
      <th scope="col">Father/Mother Name</th>
      <th>Caste</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><input type="checkbox"/></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox"/></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox"/></th>
      <td ></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>



</Container>
<Row>
    <Col xs={2}>
    <button type="button" className="btn btn-success" style={{marginLeft:600}}>Promote</button>
    </Col>
    <Col xs={6}>
    <button type="button" className="btn btn-success" style={{marginLeft:600}}>Do Not Promote</button>
    </Col>
</Row>
      </>
    )
}

export default SelectList;