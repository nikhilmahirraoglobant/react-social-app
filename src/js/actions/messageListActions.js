import messages from '../services/messages'

export function fetchMessageList(friend) {
   return function(dispatch) {
      messages.getMessages(messages => {
        dispatch({type:'RECEIVE_MESSAGE_SUCCESS',payload:messages.messages[friend.name],selectedFriend:friend})
      })
  }
}


export function submitMessage(newTxtMsg, friend){
  
  return function(dispatch){
    messages.getMessages(messages => {

      var newMsg = {
        "id": messages.messages[friend].length+1, 
        "from": "Me", 
        "text": newTxtMsg
      };
      
      messages.messages[friend].push(newMsg);
      
     dispatch({type:'SUBMIT_MESSAGE',payload:messages.messages[friend]})
    })
  }
}

