import { actionTypes } from '../actions/postActionsTypes'
const { POST_CREATE, POST_DELETE } = actionTypes
const initialState = {
  posts: [],
  pending: 'false',
  failure: 'false',
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_CREATE:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        pending: false,
        failure: false,
      }
    case POST_DELETE:
      if (state.posts.length > 0) {
        return {
          posts: state.posts.slice(0, state.posts.length - 1),
        }
      } else {
        return {
          posts: state.posts,
        }
      }

    default:
      return state
  }
}

export default postReducer
