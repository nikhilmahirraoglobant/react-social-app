import React from "react"
import { connect } from "react-redux"

import { browserHistory } from 'react-router'

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import Header from './Header'
import FriendsContainer from './FriendsContainer'
import SideMenu from './SideMenu'

import {fetchFriendsList} from "../actions/friendsListActions"
import {fetchProfile} from "../actions/profileActions"


@connect((store) => {
  return {

  };
})

export default class Layout extends React.Component {

  componentDidMount(){
     //browserHistory.push(`/friends`);
  }
  
  render() {
    return(
      <div>
        <Header />
        <Grid>
            <Row className="show-grid">
              <Col xs={12} md={3}><SideMenu/></Col>
               {this.props.children}
             </Row>
        </Grid>
      </div>
    )
  }
}
