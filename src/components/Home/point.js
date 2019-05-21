import styled, { css, keyframes } from "styled-components";

const pointScroll = keyframes`
0% {
  margin-top: 15%;
  opacity: 1;
  }
100% { 
  margin-top: 75%;
    opacity: 0;
}
`;
const pointScrollAnimaation = () => css`
  ${pointScroll} 1.5s ease 0.5s infinite;
`;
export const stylePoint = styled.div`
  width: 2px;
  height: 8px;
  border-radius: 2px;
  background-color: #2b1dcd;
  display: block;
  margin: 15% auto auto;
  animation-name: ${pointScroll};
  animation-timing-function: ease;
  animation-duration: 1.5s;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
`;

export default stylePoint;
