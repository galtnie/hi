import styled, { css, keyframes } from "styled-components";
import { AppBar } from "@material-ui/core";

const alterBackgroundColor = (props) => {
  return keyframes`
  from { background-color:  ${props.alterablestyles.navbarBackgroundColor.from}; }
  to { background-color:  ${props.alterablestyles.navbarBackgroundColor.to}; }
`};

const animation_navbar_backgroundColor = props =>
  css`
    ${alterBackgroundColor(props)} 0.5s forwards;
  `
export const AppBarWrapper = styled(AppBar)`
  animation: ${animation_navbar_backgroundColor};
`;