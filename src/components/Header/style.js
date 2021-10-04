import styled from "styled-components";

export const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background-color: #c2d5d5;
  background: linear-gradient(90deg, rgba(194,213,213,1) 22%, rgba(4,13,11,1) 100%);

  > div {
    display: flex;
    height: 100%;
    align-items: center;
    > img {
      height: 80%;
    }
    > h2 {
      color: #1a2e2e;
    }
  }
`;

export const Ulist = styled.ul`
  list-style-type: none;
  display: flex;
  justify-self: flex-end;

  > li {
    margin-right: 2rem;
    > a {
      text-decoration: none;
      color: #2defd4;
    }
    > a::visited {
      color: #2defd4;
    }
    > a::hover{
        font-weight: bold;
    }
  }
`;
