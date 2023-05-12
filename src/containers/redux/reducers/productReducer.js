import { ActionTypes } from "../contents/action-type";


const initialState = {
    products: [{
        id : 1,
        title : 'vam',
        category : 'programmer',
    }]
}
export const productReducer = (state= initialState, {type, payload}) => {

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state
    }
}