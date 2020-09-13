import * as TYPES from './orderFormType';

export const showOrderFormAC = () => {
    return {
        type: TYPES.SHOW_ORDER_FORM,
    }
}

export const hideOrderFormAC = () => {
    return {
        type: TYPES.HIDE_ORDER_FORM,
    }
}