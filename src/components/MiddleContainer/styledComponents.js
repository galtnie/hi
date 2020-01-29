import styled from "styled-components";

export const Wrapper = styled.div`
  margin: ${({ last }) => `100vh 0 ${last ? 0 : '100vh'} 0`}
`;
