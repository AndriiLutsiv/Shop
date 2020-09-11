import logger from "redux-logger";
import cartPreviewReducer from './cartPreview/cartPreviewReducer';
import thunkMiddleware from 'redux-thunk';
import departmentsDataReducer from './departmentsData/departmentsDataReducer';
import {
    createStore,
    applyMiddleware,
    combineReducers
} from "redux";
const middlewares = [logger, thunkMiddleware];


const reducers = combineReducers({
    cartPreviewReducer,
    departmentsDataReducer,
});
const store = createStore(reducers, applyMiddleware(...middlewares));
export default store;