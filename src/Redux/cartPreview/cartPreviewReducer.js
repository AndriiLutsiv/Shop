import * as TYPES from './cartPreviewActionType'
import {
    itemQuantity
} from './cartPreviewUtils';
const initialState = {
    displayPreview: false,
    items: [],
};

const cartPreviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.TOGGLE_CART_PREVIEW:
            return {
                ...state,
                displayPreview: !state.displayPreview
            };
        case TYPES.ADD_ITEM:
            return { //it returns new Set of unique items
                ...state,
                items: itemQuantity([...state.items, action.item]),
            }
            default:
                return state;

    }

};





export default cartPreviewReducer;