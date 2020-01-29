import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useStyles } from "components/HomeUpperContainer/styles";
import { Container, FullScreenContainer } from "components";
import { RESET_STYLES } from "../../constants";

export default ({ children, highZindex = false }) => {
  // const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => { 
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    dispatch({ type: RESET_STYLES });
  }, [dispatch])

  return (
    <FullScreenContainer highZindex={highZindex} smallDevice={false}>
      <Container>
        {children}
      </Container>
    </FullScreenContainer>
  );
};
