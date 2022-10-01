import React,{ useEffect, useState } from "react";
import Select from 'react-select'
import PieRComponent from "./PieComponent(1)";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import axios from "axios";
import { API_URL, CourseyearApi } from "./APIs";


function FirstComponent(){
const options =  [
    { value: 'chocolate', label: 'Chocolate' },
{ value: 'strawberry', label: 'Strawberry' },
{ value: 'vanilla', label: 'Vanilla' }
]

const [data,setData] = useState([]);
useEffect(
  () => {
    axios.get(API_URL).then( response => {
      
      setData(response.data.data);
      console.log(JSON.stringify(response.data))
    })
  },[]
);

const [crsyear,setcrsyear] = useState([]);
useEffect(
  () => {
    axios.get(CourseyearApi).then( response => {
      
        setcrsyear(response.data.data);
      console.log(JSON.stringify(response.data))
    })
  },[]
);



    return(
        <>
        <Container>
            <Row>
                <Col xs={6}>
                     <PieRComponent></PieRComponent>
                 </Col>

                <Col xs={6}>
                <div> 
                    <br></br>
                <h3>TOTAL ELIGIBLE STUDENTS</h3>
                    <ul>
                        <li>Promoted</li>
                        <li>Not Promoted</li>
                        <li>Error</li>   
                    </ul>
                </div>
                </Col>
            </Row>
    <br></br> <br></br>
    
            <Row>
                <Col sm={6}>
                    {/* <Select>{
                             data.map((crs,i) => {
                              return <option key={i} value={crs.coursecode}> {crs.cousename} </option>
                             })} </Select> */}

<select  className="form-control">
              <option value="0">----Select-----</option>
              <option value="999">All</option>
              {data.map((post) => {
                return (
                  <option value={post.coursecode}>{post.cousename}</option>
                );
              })}
            </select>
                </Col> 
                
                 <Col xs={6}>
                 <select  className="form-control">
              <option value="0">----Select-----</option>
              <option value="999">All</option>
              {crsyear.map((post) => {
                return (
                  <option value={post.courseyear}>{post.courseyear}</option>
                );
              })}
            </select>

                </Col>
        
             </Row>
      <br></br>

     <button type="button" className="btn btn-success ml-600" style={{marginLeft:600}}>Promote</button>
      
      </Container>
        </>
    )
}

export default FirstComponent;