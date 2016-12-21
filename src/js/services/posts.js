import _posts from 'json!../data/posts.json'

const TIMEOUT = 100

export default {
  getPosts: (cb, timeout) => setTimeout(() => cb(_posts), timeout || TIMEOUT)
}
