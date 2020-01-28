import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "components/Partners/styles";
import { Container, SlideContainer } from "components";
import { partners } from "constants/data";
import { PartnerLogo } from "components/Partners/styledComponents";

export default () => {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve(partners);
      }, 300);
    }).then(({ title, text, list }) => {
      setTitle(title);
      setText(text);
      setList(list);
    });
  }, []);

  return (
    <div className={classes.wrapper}>
      <Container className={classes.main}>
        <SlideContainer>
          <div className={classes.description}>
            <div className={classes.title}>{title}</div>
            <div className={classes.text}>{text}</div>
          </div>
        </SlideContainer>
        <div className={classes.listWrapper}>
          <div className={classes.listContainer}>
            {list.map((item, index) => (
              <Link to={item.path} className={classes.link} key={index}>
                <SlideContainer delay={index * 0.3}>
                  <PartnerLogo
                    image={item.image}
                    backgroundSize={item.backgroundSize}
                    backgroundPosition={item.backgroundPosition}
                  />
                </SlideContainer>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
