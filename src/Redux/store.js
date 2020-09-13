import logger from "redux-logger";
import cartPreviewReducer from './cartPreview/cartPreviewReducer';
import thunkMiddleware from 'redux-thunk';
import departmentsDataReducer from './departmentsData/departmentsDataReducer';
import orderFormReducer from './orderForm/orderFormReducer';
import {
    createStore,
    applyMiddleware,
    combineReducers
} from "redux";
const middlewares = [logger, thunkMiddleware];


const reducers = combineReducers({
    cartPreviewReducer,
    departmentsDataReducer,
    orderFormReducer,
});
const store = createStore(reducers, applyMiddleware(...middlewares));
export default store;