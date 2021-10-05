import styled from "styled-components";

export const ProductBoxStyle = styled.div`
  width: 70%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: cadetblue;
  border-radius: 8px;
  margin-top: 2rem;
  padding: 0 1.5rem;
  > div {
    display: flex;
    align-items: center;
  }
  &:hover {
    height: 160px;
    width: 72%;
  }
`;

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

export const ValueAndButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  > button {
    background-color: transparent;
    border: none;
    height: 35px;
    width: 35px;
    padding: 0;
    cursor: pointer;

    > svg {
      color: #5d723b;
    }
    > svg:hover {
      color: #94cf35;
    }
    > svg:active {
      color: #70ac0d;
    }
  }
`;
