import { combineReducers } from "redux"
import {routerReducer } from 'react-router-redux'

import profile from './profileReducer'
import friends from "./friendsListReducer"
import messages from './messagesReducer'
import posts from './postsReducer'

export default combineReducers({
  profile,
  friends,
  messages,
  posts,
  routing: routerReducer
})
