export default function reducer(state={
    messages: [],
    selectFriend:null,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "RECEIVE_MESSAGE_SUCCESS": {
       
        return {
          ...state, 
          messages:action.payload, 
          selectedFriend:action.selectedFriend, 
          fetched: true
        }
        break;
      }

      case "SUBMIT_MESSAGE": {

        return {
          ...state,
          messages:action.payload,
          messagesLength : action.payload.length
        }
      }
    }

    return state
}
