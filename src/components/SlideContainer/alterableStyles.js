import styled, { css, keyframes } from "styled-components";

const slide = props => {
  return keyframes`
  from { 
    opacity: ${props.name ? 0 : 1};
    margin-top: ${props.name ? "10rem" : 0}; 
  }
to {  
  opacity: ${props.name ? 1 : 0};
  margin-top: ${props.name ? 0 : "10rem"}; 
  }
`;
};

const slide_animation = props =>
  css`
    ${slide(props)} 0.4s linear ${props.delay}s forwards;
  `;

export const Wrapper = styled.div`
  animation: ${slide_animation}
  opacity: 0;
  margin-top: 10rem;
  margin-bottom: 0;
`;
