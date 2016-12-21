import posts from '../services/posts'

export function fetchPostsList() {
   return function(dispatch) {
      posts.getPosts(posts => {
        dispatch({type:'RECEIVE_POSTS_SUCCESS',payload:posts})
      })
  }
}

export function submitPost(newPost){
  var newPost = {"from": "Nikhil Mahirrao","title" : newPost};
  return function(dispatch){
    posts.getPosts(posts => {
      posts.unshift(newPost);
      dispatch({type:'SUBMIT_POST',payload:posts})
    })
  }
}
