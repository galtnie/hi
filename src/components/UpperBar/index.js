import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { navigationList } from "constants/data";
import {
  Toolbar
} from "@material-ui/core/";
import { AppBarWrapper } from 'components/UpperBar/styledComponents'
import { useStyles } from "components/UpperBar/styles";
import { Container, Logo, SwitchStylesContainer } from "components";
import { useSelector } from 'react-redux';
import { alterableStylesList } from "constants/styles";

export default () => {
  const classes = useStyles();
  const alterableStyles = useSelector(state => state.alterableStyles);
  let container = useRef(null);
 
  return (
    <AppBarWrapper position="fixed" className={classes.root} alterablestyles={alterableStyles} ref={container}>
      <SwitchStylesContainer
        scrollEffect={alterableStylesList[0]}
        when='window_top'
        navbarOnly
      />
      <Container>
        <Toolbar className={classes.bar}>
          <div className={classes.title}>
            <Logo />
          </div>

          {navigationList && (
            <ul className={classes.list}>
              {navigationList.map((item, index) => (
                <li
                  key={item.name}
                  className={
                    index === navigationList.length - 1
                      ? `${classes.item} ${classes.last}`
                      : classes.item
                  }
                >
                  <NavLink exact to={item.link} className={classes.link}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </Toolbar>
      </Container>
    </AppBarWrapper>
  );
};
