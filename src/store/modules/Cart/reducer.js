import { ADD_PRODUCT, SUB_PRODUCT } from './actionTypes';

const CartReducer = (state = [], action ) =>{
    switch (action.type){
        case ADD_PRODUCT:
            alert('foi');
            return [...state, action.ball]

        case SUB_PRODUCT:
                return state.filter(item => item.id !== action.ball.id)

        default:
            return state

    }
}

export default CartReducer;