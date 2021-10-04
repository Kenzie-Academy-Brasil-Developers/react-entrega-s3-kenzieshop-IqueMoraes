import styled from "styled-components";


export const ProductBoxStyle = styled.div ` 
width: 70%;
height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
background-color: cadetblue;
border-radius: 8px;
margin-top: 2rem;
padding: 0 1.5rem;

`

export const ImgBox = styled.div `
height: 120px;
width: 120px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 1rem;
>img{
      height: 100%;
  }

`

export const ValurAndButtonsBox = styled.div ` 
display: flex;
flex-direction: column;

`