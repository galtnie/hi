import React from 'react'
import { logo } from 'constants/data'
import { NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core/";
import { useStyles } from 'components/Logo/styles'

export default ({ footer = null }) => {
  const classes = useStyles();

  return (
    <NavLink
      className={footer ? `${classes.main} ${classes.mainFooter}` : classes.main}
      main="true"
      exact to="/"
    >
      <Typography
        className={footer ? classes.title : ''}
        variant="h5">
          {logo}
      </Typography>
    </NavLink>
  )
}
