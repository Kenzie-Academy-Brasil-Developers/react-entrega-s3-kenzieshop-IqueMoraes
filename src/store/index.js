import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CartReducer from "./modules/Cart/reducer";


const reducers = combineReducers({ball: CartReducer});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;