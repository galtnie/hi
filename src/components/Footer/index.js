import React, { useState, useEffect } from "react";
import { Container, Logo } from "components";
import { useStyles } from "components/Footer/styles";
import { footerNavigationOptions, footerExternalLinks } from "constants/data";
import { Link } from "react-router-dom";

export default () => {
  const classes = useStyles();

  const [internalLinks, setInternalLinks] = useState([]);
  const [externalLinks, setExternalLinks] = useState([]);

  useEffect(() => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve(footerNavigationOptions);
      }, 300);
    }).then(value => {
      setInternalLinks(value);
    });

    new Promise(resolve => {
      setTimeout(() => {
        resolve(footerExternalLinks);
      }, 300);
    }).then(value => {
      setExternalLinks(value);
    });
  }, []);

  return (
    <Container>
      <div className={classes.upperLine} />
      <div className={classes.main}>
        <div className={classes.logoContainer}>
          <Logo footer />
          <span>
            Full-Stack web and mobile app development and design company
          </span>
        </div>
        <div className={classes.internalLinksCotainer}>
          {internalLinks.map((column, inx) => (
            <div key={inx}>
              {column.map((item, index) => (
                <Link className={classes.columnLink} to={item.link} key={index}>
                  <div
                    className={
                      index === 0 ? classes.columnFirstItem : classes.columnItem
                    }
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className={classes.externalLinksCotainer}>
          {externalLinks.map((item, index) => (
            <Link
              className={`${classes.columnLink} ${classes.linkWrapper}`}
              to={item.path}
              key={index}
            >
              <div className={classes.externalLink}>
                <div className={classes.imageWrapper}>
                  <i
                    className={`${classes.externalLinkImage} fa fa-${
                      item.name
                    } fa-${item.name === "github" ? "2" : "1"}x`}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};
