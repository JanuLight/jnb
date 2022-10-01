import React from "react";
import { Container } from "react-bootstrap";

export default function Secondscreen() {
  return (
    <>
      <Container>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th
                scope="col"
                style={{ color: "green", borderBottom: "2px solid red" }}
              >
                Upload Supporties
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>Instructions</ul>
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-success">
                  Upload Documents
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}
