import React, { Component, PropTypes } from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

export default class Explore extends Component {

  render() {
    return (
      <div className = 'header-section'>
        <Grid>
            <Row className="show-grid header">
              <Col md={12}>FACEBOOK</Col>
            </Row>
          </Grid>
      </div>
    )
  }
}
