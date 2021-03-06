import React, { Component, PropTypes } from 'react'
import { connect } from "react-redux"

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import PostList from './PostList'
import FriendsList from './FriendsList'

@connect((store) => {
  return {
   
  };
})

export default class PostContainer extends Component {

  render() {
    return (
      <div>
        <Grid>
            <Row className="show-grid">
              <Col xs={12} md={6}><PostList /></Col>
              <Col xs={12} md={3}><FriendsList /></Col>
            </Row>
        </Grid>
      </div>
    )
  }
}
