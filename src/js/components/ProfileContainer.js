import React, { Component, PropTypes } from 'react'

import { connect } from "react-redux"

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import FriendsList from './FriendsList'
import Profile from './Profile'

import {fetchProfile} from "../actions/profileActions"

var data;

@connect((store) => {
data = store;
  return {
    //profile : store.profile.profile,
    //profileLength : store.profile.profile ? Object.keys(store.profile.profile).length : 0
  };
})

export default class ProfileContainer extends Component {

  componentWillMount() {
  }


  render() {
    console.log('this.props::: ',this.props);
    return (
      <div>
        <Grid>
            <Row className="show-grid"> {}
              <Col xs={12} md={6}><Profile/></Col>              
              <Col xs={12} md={3}><FriendsList/></Col>
            </Row>
        </Grid>
      </div>
    )
  }
}
