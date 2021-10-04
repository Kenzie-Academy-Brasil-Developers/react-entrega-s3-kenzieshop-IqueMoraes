import { addBall,subBall } from "./action";

export const addBallThunk = (ball) => (dispatch) =>{
    dispatch(addBall(ball))
}

export const subBallThunk = (ball) => (dispatch) => {
    dispatch(subBall(ball))
}