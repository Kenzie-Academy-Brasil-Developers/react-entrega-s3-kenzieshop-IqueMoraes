import { addBall,subBall } from "./action";

export const addBallThunk = (ball) => (dispatch) =>{
    console.log('entrei no thunk')
    dispatch(addBall(ball))
}

export const subBallThunk = (ball) => (dispatch) => {
    dispatch(subBall(ball))
}