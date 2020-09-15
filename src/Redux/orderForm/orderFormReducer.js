import * as TYPES from "./orderFormType";
const initialState = {
    open: true
};

const orderFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SHOW_ORDER_FORM:
            return {
                ...state,
                open: true
            };
        case TYPES.HIDE_ORDER_FORM:
            return {
                ...state,
                open: false
            };
        default:
            return state;
    }
}
export default orderFormReducer;