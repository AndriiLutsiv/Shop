import * as TYPES from "./cartPreviewActionType";
import {
    itemQuantity
} from "./cartPreviewUtils";
const initialState = {
    displayPreview: false,
    items: [],
    totalPrice: 0,
};

const cartPreviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.TOGGLE_CART_PREVIEW:
            return {
                ...state,
                displayPreview: !state.displayPreview,
            };
        case TYPES.ADD_ITEM:
            return {
                //it returns new Set of unique items
                ...state,
                totalPrice: state.totalPrice + action.itemPrice,
                    items: itemQuantity([...state.items, action.item]),
            };
        case TYPES.INCREASE_QUANTITY:
            return {
                ...state,
                totalPrice: state.totalPrice + action.itemPrice,
                    items: state.items.map((item) => {
                        if (item.id === action.itemId) {
                            return {
                                ...item,
                                quantity: (item.quantity += 1),

                            };
                        } else {
                            return item;
                        }
                    }),
            };
        case TYPES.DECREASE_QUANTITY:
            return {
                ...state,
                totalPrice: state.totalPrice - action.itemPrice,
                    items: state.items.map((item) => {
                        if (item.id === action.itemId) {
                            return {
                                ...item,
                                quantity: (item.quantity -= 1),
                            };
                        } else {
                            return item;
                        }
                    }),
            };
        case TYPES.REMOVE_ITEM:
            return {
                ...state,
                totalPrice: state.totalPrice - action.itemPrice * action.quantity,
                    items: state.items.filter((item) => item.id !== action.itemId),
            };
        default:
            return state;
    }
};

export default cartPreviewReducer;