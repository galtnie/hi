import styled from "styled-components";

export const PartnerLogo = styled.div`
  height: 6rem;
  width: 8rem;
  background-image: url(${({ image }) => image});
  background-size: ${({ backgroundSize }) => backgroundSize}rem;
  background-position: ${({ backgroundPosition }) => backgroundPosition};
  background-repeat: no-repeat;
  overflow: hidden;
  cursor: pointer;
  margin: 1rem;
`;