import * as TYPES from './cartPreviewActionType';
// import {
//     initialState
// } from '../departmentsData/departmentsDataReducer';
export const cartPreviewAC = () => {
    return {
        type: TYPES.TOGGLE_CART_PREVIEW
    };
};

export const addItemAC = (item, itemPrice) => {
    return {
        type: TYPES.ADD_ITEM,
        item: item,
        itemPrice: itemPrice,

    };
};



export const addItemThunkCreator = (item, itemPrice, itemId) => {
    return (dispatch) => {
        let stringItem = JSON.stringify(item);
        sessionStorage.setItem(itemId, stringItem);
        dispatch(addItemAC(item, itemPrice))
    }
}
export const removeItemAC = (itemId, itemPrice, quantity) => {
    return {
        type: TYPES.REMOVE_ITEM,
        itemId: itemId,
        itemPrice: itemPrice,
        quantity: quantity,
    }
}

export const removeItemThunkCreator = (itemId, itemPrice, quantity) => {
    return (dispatch) => {
        sessionStorage.removeItem(itemId);
        dispatch(removeItemAC(itemId, itemPrice, quantity));
    }
}

export const increaseAC = (itemId, itemPrice, quantity) => {
    return {
        type: TYPES.INCREASE_QUANTITY,
        itemId: itemId,
        itemPrice: itemPrice,
        quantity: quantity
    }
}

export const decreaseAC = (itemId, itemPrice, quantity) => {
    return {
        type: TYPES.DECREASE_QUANTITY,
        itemId: itemId,
        itemPrice: itemPrice,
        quantity: quantity
    }
}

// export const checkItemThunkCreator = () => {
//     return (dispatch) => {
//         initialState.sections.forEach(section => {
//             section.items.forEach(item => {
//                 // console.log(item)
//                 if (localStorage.getItem(item.id)) {
//                     dispatch(addItemAC(item, item.price))
//                 }
//             });

//         });
//     }
// }

// export const increaseThunkCretor = ( itemId, itemPrice, quantity) => {
//     return (dispatch) => {
        
//         // here i get item which is object from local storage and parse it
//         const objItem = JSON.parse(localStorage.getItem(itemId))
//         objItem.quantity += 1;
        
//         // here i turn it back to string and update LS item by setting item again
//         let stringItem = JSON.stringify(objItem);
//         localStorage.setItem(itemId, stringItem);
//         dispatch(increaseAC(itemId, itemPrice, quantity));
//     }
// }

// export const decreaseThunkCretor = (itemId, itemPrice, quantity) => {
//     return (dispatch) => {
//         // here i get item which is object from local storage and parse it
//         const objItem = JSON.parse(localStorage.getItem(itemId))
//         objItem.quantity -= 1;
        
//         // here i turn it back to string and update LS item by setting item again
//         let stringItem = JSON.stringify(objItem);
//         localStorage.setItem(itemId, stringItem);
//         dispatch(decreaseAC(itemId, itemPrice, quantity));
//     }
// }