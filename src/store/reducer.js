import { combineReducers } from 'redux'
import user from './reducers/user'
import roomer from './reducers/roomer'

export default combineReducers({
    user,
    roomer
})
