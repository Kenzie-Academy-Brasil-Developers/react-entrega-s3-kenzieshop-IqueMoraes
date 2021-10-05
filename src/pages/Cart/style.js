import styled from "styled-components";

export const CartPageBox = styled.section ` 
  padding: 3rem;
  margin: 0 auto;
  display: flex;

  
`;


export const ProductsList = styled.div ` 
width: 70%;


`
export const ImgBox = styled.div`
  height: 120px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  > img {
    height: 100%;
  }
  
`;

export const ResumeShopping = styled.div ` 
background-color:#7492a1;
width: 200px;
height: fit-content;
border-radius: 8px;
padding: 1.5rem;
position: fixed;
top: 180px;
right: 3rem;

>button{
    width: 100%;
    height: 1.7rem;
    font-size: 16px;
    background-color: #5d723b;
    border: none;
    border-radius: 3px;
    color: white;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-top: 0.6rem;
}

`