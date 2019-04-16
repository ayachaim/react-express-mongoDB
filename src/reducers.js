/*合并多个ruducer */
import {combineReducers} from 'redux'
import {user} from './redux/user.redux'
import {chatuser} from './redux/charuser.redux'
const reducers=combineReducers({
  user, chatuser
})

export default reducers
