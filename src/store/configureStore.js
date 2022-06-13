import { createStore,applyMiddleware } from "redux";
//-----simple redux---------------
// import reducer from "./reducer";

//----ducks pattern---
import {devToolsEnhancer} from "redux-devtools-extension";
// import reducer from "./bug";
// import reducer from './project';


//multiple reducers
import combineReducer from "./combineReducer";

//simple redux
// const store = createStore(reducer);

//---ducks pattern--

import logger from "./middleware/logger";
import { configureStore } from "@reduxjs/toolkit";
// export default function configureStore(){
//     //individal reducer
//     // const store = createStore(reducer);

//     //multiple reducers(to use middleware without using reactjs toolkit)
//     const store = createStore(combineReducer,applyMiddleware(logger));


//     return store;
// }

//middleware using reacths toolkit
export default function(){
    return configureStore({
        reducer:combineReducer,
        middleware:[logger({destination:"console"})]
    });
}