import styled, { css } from "styled-components";

export const List = styled.ul`
  display: flex;
  ::-webkit-scrollbar {
    display: none;
    background: black;
  }
  ::-webkit-scrollbar-track {
    background: blue;
    color: black;
    background-color:black;
  }
  ::-webkit-scrollbar-thumb {
    background-color: black;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid black;  /* creates padding around scroll thumb */
  }
  overflow: scroll;
  overflow-x:scroll;
  width: 100%;
  padding-top: 5px;
  ${(props) =>
    props.fixed &&
    css`
       {
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(0.5);
        z-index: 1;
      }
    `}
`;

export const Item = styled.li`
  padding-top: 5px;
  padding: 0 9px;
`;
