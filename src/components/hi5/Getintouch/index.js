/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'gatsby'

import Form from 'react-bootstrap/Form'
import './styled.css'
class Getintouch extends React.Component {
  render() {
    return (
      <div>
        <Container className="border-top spb-5">
          <Row>
            <Col lg="6">
              <h2>Get in touch</h2>
            </Col>
            <Col lg="6">
              <p>
                Intersted in learning more about the Social Tech Startup
                Challenge or any other projects?
              </p>
              <p>
                Reach out to
                <Link to="mailto:newbiz@urbian.co.za">
                  {' '}
                  newbiz@urbian.co.za
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
        <div className="nextup dark">
          <Container>
            <Row className="align-items-center">
              <Col md="6" lg="6">
                <Link to="/casestudy">
                  <span>Next up</span>
                  <h2>
                    Clearing a 9-year old feature backlog in 6 months.
                  </h2>
                  <p>
                    An agile development process was the key to delivering an
                    insurance API that allows any department to refer insurance
                    leads or sell insurance directly to their client.
                  </p>
                </Link>
              </Col>
              <Col className="offset-lg-1" md="6" lg="5">
                <div className="form-div">
                  <p>Stay in the loop with our quarterly newsletter </p>
                  <Form className="mt-5">
                    <Form.Group controlId="">
                      <Form.Control
                        type="email"
                        placeholder="Your Email"
                        required
                      />
                    </Form.Group>
                    <button class="styled__Button-ksqKNN iyLmoo styled__Button-kGpwPX dQtCFI form-contact-button">
                      Send
                      <svg
                        className="Arrow__Svg-gllSXh SARKW styled__Arrow-ihTfeJ cFLifL"
                        width="14"
                        height="10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g stroke="#ffffff" fill="none" fillRule="evenodd">
                          <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                          <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                        </g>
                      </svg>
                    </button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Getintouch
