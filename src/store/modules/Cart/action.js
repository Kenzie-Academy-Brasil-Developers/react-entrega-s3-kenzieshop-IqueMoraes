import { ADD_PRODUCT, SUB_PRODUCT } from "./actionTypes";

export const addBall = (ball) => ({
    type: ADD_PRODUCT,
    ball,
    
})

export const subBall = (ball) => ({
    type: SUB_PRODUCT,
    ball
})