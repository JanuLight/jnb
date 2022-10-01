import React from "react";
import { Container } from "react-bootstrap";

export default function Thirdsceen() {
  return (
    <>
      <Container>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Select</th>
              <th scopes="col">Student ID</th>
              <th scope="col">Student Name</th>
              <th scope="col">Father/Mother Name</th>
              <th>Caste</th>
              <th>Promote</th>
            </tr>
          </thead>
        </table>
      </Container>
    </>
  );
}
