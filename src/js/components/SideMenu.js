import React, { Component, PropTypes } from 'react'
import {connect} from "react-redux"
import { browserHistory } from 'react-router'

import Image from 'react-bootstrap/lib/Image'

import {fetchFriendsList} from "../actions/friendsListActions"
import {fetchPostsList} from '../actions/PostActions'
import {fetchProfile} from "../actions/profileActions"

@connect((store) => {
  return {
    profile : store.profile.profile
  };
})

export default class SideMenu extends Component {

  componentWillMount() {
    this.props.dispatch(fetchPostsList());
    this.props.dispatch(fetchFriendsList());
    this.props.dispatch(fetchProfile());
  }

  handlePostSelectAction = () => {    
    browserHistory.push(`/posts`)
  }

  handleFriendSelectAction = () => {      
    browserHistory.push(`/friends`)
  }

  handleProfileSelectAction = () => {   
    browserHistory.push(`/profile`)
  }

  render() {

    return (
          <div>
              
              {
                this.props.profile !== null ? 
                <div className = 'friend-post-icon-container'>
                    <Image onClick = {this.handleProfileSelectAction} className = 'icon-friends-posts' src={this.props.profile.photo} role="button"/>
                    <span className = 'friend-post-icon'>Profile</span>
                </div> : null
              }              
              
              <div className = 'friend-post-icon-container'>
                <Image onClick = {this.handleFriendSelectAction} className = 'icon-friends-posts' src="images/friendsIcon.jpg" role="button"/>
                <span className = 'friend-post-icon'>Friends</span>
              </div>
              <div className = 'friend-post-icon-container'>
                <Image onClick = {this.handlePostSelectAction} className = 'icon-friends-posts'  src="images/postsIcon.jpg" role="button"/>
                <span className = 'friend-post-icon'>Posts</span>
              </div>
          </div>
    )
  }
}
