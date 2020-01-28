import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tilt from "react-tilt";
import { Button } from "@material-ui/core/";
import { Container, SlideContainer } from "components";
import { techsUsed } from "constants/data";
import { useStyles } from "components/TechsUsed/styles";
import { ImageContainer } from "components/TechsUsed/styledComponents";

export default () => {
  const classes = useStyles();

  const [title, setTitle] = useState(null);
  const [text, setText] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve(techsUsed);
      }, 300);
    }).then(({ title, text, list }) => {
      setTitle(title);
      setText(text);
      setList(list);
    });
  }, []);

  return (
    <Container className={classes.main}>
      <SlideContainer>
        <div className={classes.description}>
          <div className={classes.title}>{title}</div>
          <div className={classes.text}>{text}</div>
        </div>
      </SlideContainer>

      <div className={classes.cardContainer}>
        {list.map((item, index) => (
          <SlideContainer delay={index * 0.4} key={index}>
            <Tilt
              className="Tilt"
              options={{ max: 45, reverse: false, speed: 1000 }}
            >
              <div className={classes.card}>
                <ImageContainer logo={item.logo} />
                {item.name} Development
              </div>
            </Tilt>
          </SlideContainer>
        ))}
      </div>

      <div className={classes.buttonContainer}>
      <SlideContainer className={classes.buttonWrapper}>
        <Link to={`/portfolio`} className={classes.link}>
          <Button className={classes.button} color="primary">See our technologies</Button>
        </Link>
        </SlideContainer>
        </div>
    </Container>
  );
};
