import React, {Component} from 'react'
import { connect } from 'react-redux'
import Image from 'react-bootstrap/lib/Image'
import { browserHistory } from 'react-router'


import {fetchMessageList} from '../actions/messageListActions'


@connect((store) => {
  return {
    friends : store.friends.friends
  };
})

export default class FriendsList extends Component {

  fetchMessages = (friend) => {
    browserHistory.push('/friends');
    this.props.dispatch(fetchMessageList(friend))
  }

  render() {
    const mappedFriends = this.props.friends.map(friend => 
      <div className = 'show-friends'>
      <div><Image onClick={()=>{this.fetchMessages(friend)}} className = 'friend-list' id = {friend.name} src={friend.photo}  /></div>
      <div className = 'friend-name'>{friend.name}</div></div>
    )
    
    return (
      <div  role="button">
          {mappedFriends}
      </div>
    )
  }
}
