import styled, { css, keyframes } from "styled-components";
import { Button } from "@material-ui/core";

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


const alterColor = (props) => {
  return keyframes`
  from { color:  ${props.alterablestyles.color.from}; }
  to { color:  ${props.alterablestyles.color.to}; }
`};

const animation_color = props =>
  css`
    ${alterColor(props)} 0.5s forwards;
  `
export const AlterableStylesText = styled.div`
  animation: ${animation_color};
`;

export const AlterableStylesButton = styled(Button)`
  color:  ${({alterablestyles}) => `${alterablestyles.button.color} !important`}; 
  border: ${({ alterablestyles }) => `2px solid ${alterablestyles.button.color} !important`};
  &:hover {
    background-color: ${({ alterablestyles }) => `${ alterablestyles.button.hover_backgroundColor} !important`};
    color:  ${({ alterablestyles }) => `${ alterablestyles.button.hover_color} !important`};
  }
`;
