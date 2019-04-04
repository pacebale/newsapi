import { createStore, compose,composeEnhancers, applyMiddleware } from 'redux'
import artikelReducer from '../redux/reducer'
import thunk from 'redux-thunk'



 
const middle= applyMiddleware(thunk)
const store = createStore(artikelReducer, compose(middle)) 
export default store
 