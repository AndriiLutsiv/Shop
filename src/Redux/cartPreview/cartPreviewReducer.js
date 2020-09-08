import * as TYPES from './cartPreviewActionType'
// import {
//     itemQuantity
// } from './cartPreviewUtils';
const initialState = {
    displayPreview: false,
    items: [],
    items2: new Set(items),
};

const cartPreviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.TOGGLE_CART_PREVIEW:
            return {
                ...state,
                displayPreview: !state.displayPreview
            };
        case TYPES.ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.item],
            }
            // return {
            //     ...state,
            //     items: itemQuantity(),
            // }
            default:
                return state;

    }

};





export default cartPreviewReducer;