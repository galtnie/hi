import styled from "styled-components";

export const ImageContainer = styled.div`
  height: 7rem;
  width: 15rem;
  background-image: ${({ logo }) => `url(${logo})`};
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
`;