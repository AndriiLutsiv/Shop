import logger from "redux-logger";
import cartPreviewReducer from './cartPreview/cartPreviewReducer';
import {
    createStore,
    applyMiddleware,
    combineReducers
} from "redux";
const middlewares = [logger];


const reducers = combineReducers({
    cartPreviewReducer
});
const store = createStore(reducers, applyMiddleware(...middlewares));
export default store;