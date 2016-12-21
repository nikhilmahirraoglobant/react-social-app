import React from "react"
import { connect } from "react-redux"

import { browserHistory } from 'react-router'

import Header from './Header'
import FriendsContainer from './FriendsContainer'

import {fetchFriendsList} from "../actions/friendsListActions"
import {fetchProfile} from "../actions/profileActions"

@connect((store) => {
  return {

  };
})

export default class Layout extends React.Component {

  componentDidMount(){
    this.getProfile();
    this.getFriendsList();
  }

  getProfile = () => {
    this.props.dispatch(fetchProfile())
  }

  getFriendsList = () => {
    browserHistory.push(`/friends`)
  }

  render() {
    return(
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
