import styled, { css, keyframes } from "styled-components";

const alterBackgroundColor = (props) => {
  return keyframes`
  from { background-color:  ${props.alterablestyles.backgroundColor.from}; }
  to { background-color:  ${props.alterablestyles.backgroundColor.to}; }
`};

const animation_backgroundColor = props =>
  css`
    ${alterBackgroundColor(props)} 0.5s forwards;
  `
export const AlterableStylesWrapper = styled.div`
  animation: ${animation_backgroundColor};
`;