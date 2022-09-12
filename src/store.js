import {createStore} from "redux";
 import rootReducers from "./reducer/index";
const store =createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;

// store method to store user data

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() this
// method is optional just using form display work flow of redux using redux extention