import { actionTypes } from '../actions/postActionsTypes'

const { POST_CREATE, POST_DELETE } = actionTypes

export const create_post = (post) => {
  return {
    type: POST_CREATE,
    payload: post,
  }
}

export const delete_post = () => {
  return {
    type: POST_DELETE,
  }
}
