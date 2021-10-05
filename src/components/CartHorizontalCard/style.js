import styled from "styled-components";


export const ProductBoxStyle = styled.div ` 
width: 70%;
height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
background-color: #5d723b;
border-radius: 8px;
margin-top: 2rem;
padding: 0 1.5rem;
> div {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
`

export const ImgBox = styled.div `
height: 80px;
width: 80px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 1rem;
>img{
      height: 100%;
  }

`

export const ValueAndButtonsBox = styled.div ` 
display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50px;
  > button {
    background-color: transparent;
    border: none;
    height: 35px;
    width: 35px;
    padding: 0;
    cursor: pointer;

    > svg {
      color: #db7710;
    }
    > svg:hover {
      color: #ffa547;
    }
    > svg:active {
      color: #b9650e;
    }
  }

`