import React, {Component} from 'react'
import { connect } from 'react-redux'
import Image from 'react-bootstrap/lib/Image'
import Button from 'react-bootstrap/lib/Button'
import {submitPost} from "../actions/PostActions"

@connect((store) => {
  return {
      posts: store.posts.posts,
      postsLength : store.posts.posts.length
  };
})

export default class PostsList extends Component {

  submitPost = () => {
    this.props.dispatch(submitPost(document.getElementById('user-post').value))
    document.getElementById('user-post').value = "";
  }

  render() {
  
    const mappedPosts = this.props.posts.map(post =>
                <div className = 'posts-container'>
                    <div className = 'post-link'>
                      <span className= 'post-sender'>{post.from}</span> shared
                      
                      {post.link ? <span> shared <a target='_blank' href = {post.link}>{post.link}</a></span> : null}
                    </div>
                    <div>
                      <div className = 'post-title'>{post.title}</div>
                      {post.image ? <div><Image className = 'post-image' src={post.image} /></div> : null}                    
                    </div>
                </div>
              )

    return (
      <div>
        <div className = 'user-post'>
          <form>
          <textarea id = 'user-post' rows="4" cols="50" placeholder = "What's  on your mind"></textarea>
              <br />
              <Button bsStyle="primary" onClick = {this.submitPost}>Post</Button>
          </form>
        </div>
        <div>
              {mappedPosts}
        </div>
      </div>
    )
  }
}
