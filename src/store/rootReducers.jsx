import { combineReducers } from "redux";
import products from './reducer/addBascets';
import auth from './reducer/auth';

const rootReducer = combineReducers({
    products: products,
    auth: auth
})
console.log(rootReducer)

export default rootReducer;