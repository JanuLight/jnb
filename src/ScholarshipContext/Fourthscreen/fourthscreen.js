import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Field, Formik, FormikProvider, useFormik } from "formik";
export default function Fourthscreen() {
  const forrmikInitialValues = {
    hallticket: "",
    rollno: "",
    admdate: "",
    scheme: "",
    scheduled_type: "",
    upload: "",
  };
  const formIk = useFormik({
    initialValues: forrmikInitialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    //validationSchema: formikValidation,
  });
  return (
    <>
      <FormikProvider value={formIk}>
        <Form onSubmit={formIk.handleSubmit}>
          <center>
            <table width="30%">
              <Row>
                <Col xs={6}>HALL TICKET NUMBER :</Col>
                <Col xs={6}>
                  <Field
                    type="text"
                    name="hallticket"
                    className="form-control"
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={6}>Roll Number :</Col>
                <Col xs={6}>
                  <Field type="text" name="rollno" className="form-control" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={6}>Scheme :</Col>
                <Col xs={6}>
                  <Field type="text" name="scheme" className="form-control" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={6}>Admission Date :</Col>
                <Col xs={6}>
                  <Field type="date" name="admdate" className="form-control" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={6}>Schedule Type :</Col>
                <Col xs={6}>
                  <Field
                    type="text"
                    name="scheduled_type"
                    className="form-control"
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={6}>Upload :</Col>
                <Col xs={6}>
                  <Field type="file" name="upload" className="form-control" />
                </Col>
              </Row>
              <br />

              <Row style={{ marginLeft: "500px " }}>
                <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={8}>
                  <button type="submit" className="btn btn-success">
                    {" "}
                    submit
                  </button>
                </Col>
              </Row>
            </table>
          </center>
        </Form>
      </FormikProvider>
    </>
  );
}
