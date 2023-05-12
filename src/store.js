import { createstore } from 'redux'
import reducers from './containers/redux/reducers'
import {composeWithDevTools} from 'redux-devtools-extension'


const store = createstore(
    reducers, 
    {}, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;