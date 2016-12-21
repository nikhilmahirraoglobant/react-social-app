import React, { Component, PropTypes } from 'react'
import {connect} from "react-redux"
import Image from 'react-bootstrap/lib/Image'
import { browserHistory } from 'react-router'
import {fetchFriendsList} from "../actions/friendsListActions"
import {fetchPostsList} from '../actions/PostActions'

@connect((store) => {
  return {

  };
})

export default class SelectFriendsPosts extends Component {

  handlePostSelectAction = () => {
    this.props.dispatch(fetchPostsList())
    browserHistory.push(`/posts`)
  }

  handleFriendSelectAction = () => {
    this.props.dispatch(fetchFriendsList())
    browserHistory.push(`/friends`)
  }

  render() {
    return (
          <div>
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
