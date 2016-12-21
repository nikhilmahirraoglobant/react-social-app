import friends from '../services/friends'

export function fetchFriendsList() {
   return function(dispatch) {
      friends.getFriends(friends => {
        dispatch({type:'RECEIVE_FRIENDS_SUCCESS',payload:friends})
      })
  }
}
