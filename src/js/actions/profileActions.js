import profile from '../services/profile'

export function fetchProfile() {
   return function(dispatch) {
      profile.getProfile(profileData => {
        dispatch({
          type:'RECEIVE_PROFILE_SUCCESS',
          payload: profileData
        })
      })
  }
}
