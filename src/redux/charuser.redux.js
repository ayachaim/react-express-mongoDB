import axios from 'axios'
const USER_LIST = 'USER_LIST'
const initState = {
  userlist: []
}
//chatuser reducer
export function chatuser(state = initState, action) {
  switch (action.type) {
    case USER_LIST:
      return {
        ...state,
        userlist: action.payload
      }
    default:
      return state
  }
}

function userList(data) {
  return {
    type: USER_LIST,
    payload: data
  }
}
//请求关联
export function getUserList(type) {
  return dispatch => {
    axios.get('/user/list?type='+type).then(
      res => {
        if (res.data.code === 0) {
          dispatch(userList(res.data.data))
        }
      }
    )
  }
}