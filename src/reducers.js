/*合并多个ruducer */
import {combineReducers} from 'redux'
import {user} from './redux/user.redux'
import {chatuser} from './redux/charuser.redux'
import {chat} from './redux/chat.redux'
const reducers=combineReducers({
  user, chatuser,chat
})

export default reducers
