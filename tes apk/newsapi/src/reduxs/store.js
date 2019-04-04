import { createStore } from 'redux'
import loginReducer from '../reduxs/reducer'

const store = createStore(loginReducer)

export default store