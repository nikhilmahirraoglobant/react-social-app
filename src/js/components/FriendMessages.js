import React, {Component} from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/lib/Button'
import Image from 'react-bootstrap/lib/Image'

import {fetchMessageList, submitMessage} from "../actions/messageListActions"

@connect((store) => {
  return {
    messagesList : store.messages.messages,
    messageListLength : store.messages.messages.length,
    selectedFriend : store.messages.selectedFriend,
    profile : store.profile.profile
  };
})

export default class FriendMessages extends Component {

  setColorForUser = (messageSender) => {

   if(messageSender === 'Me'){
      return 'bg-light-gray'
    }
    else{
      return 'bg-gray'
    }
  }
  
  componentDidUpdate() {
    var node = document.getElementById('message-list');
    if(node != null)
    {
       node.scrollTop = node.scrollHeight;
    }
  }
  

  submitMessage = () =>{
    this.props.dispatch(submitMessage(document.getElementById('send-message').value,this.props.selectedFriend.name))
    document.getElementById('send-message').value = "";

    //console.log(this.props.friends[this.props.selectedFriend])
    //fetchMessageList(this.props.selectedFriend);
  }

  render() {
    
    if(this.props.messagesList.length === 0){
        return <div></div>;
    }

    const imageMyTag = <Image className = 'friend-icon' id = {this.props.profile.name} src={this.props.profile.photo}  />
    const imageFriendTag = <Image className = 'friend-icon' id = {this.props.selectedFriend.name} src={this.props.selectedFriend.photo}  />

    const mappedMessages = this.props.messagesList.map(message =>
          <div>
                {message.from !== 'Me' ? <div className = 'message-sender-friend-name'>{imageFriendTag} {message.from}</div> : <div className = 'message-reciever-friend-name'>{imageMyTag} {message.from}</div>}
                <div className = {this.setColorForUser(message.from)}>{message.text}</div>
                
          </div>)

    return (

          <div className = 'friends-messages-container'>
              <div className = 'selectedFriend'>{this.props.selectedFriend.name}</div>
              <div id = 'message-list' className = 'messages-list'>{mappedMessages}</div>
              <div className = 'send-message-title'>Write to {this.props.selectedFriend.name}</div>
              <textarea id = 'send-message' rows="3" cols="56"></textarea>
              <Button bsStyle="primary send-button" onClick = {this.submitMessage}>Send</Button>
          </div>
    )
  }
}
