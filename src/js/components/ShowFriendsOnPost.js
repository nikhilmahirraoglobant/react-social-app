import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"
import {fetchFriendsList} from "../actions/friendsListActions"
import { browserHistory } from 'react-router'

import Header from './Header'
import FriendsContainer from './FriendsContainer'

@connect((store) => {
  return {

  };
})
export default class ShowFriendsOnPost extends React.Component {

  render() {
    return(
      <div>
        Friends on Post
      </div>
    )
  }
}
