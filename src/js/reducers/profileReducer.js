export default function reducer(state = {
    profile: null,
    error: null
}, action) {

    switch (action.type) 
    {
        case "RECEIVE_PROFILE_SUCCESS":
            {
                return {
                    ...state,
                    profile: action.payload                    
                }
            }
    }

    return state
}
