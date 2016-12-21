import profile from '../services/profile'

export function fetchProfile() {
   return function(dispatch) {
      profile.getProfile(profile => {
        dispatch({type:'RECEIVE_PROFILE_SUCCESS',payload:profile})
      })
  }
}
