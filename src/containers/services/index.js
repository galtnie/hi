import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Footer,
  MiddleContainer,
  ScrollContainer,
  SendMessageContainer,
  SlideContainer,
  SwitchStylesContainer,
  UpperContainer
} from "components";
import { Button } from "@material-ui/core/";
import { ourService, upperContainertexts } from "constants/data";
import { useStyles } from "./styles";
import { alterableStylesList } from "constants/styles";
import {
  AlterableStylesWrapper,
} from "containers/services/styledComponents";


export default () => {
  const classes = useStyles();

  const [upperContainer_text, setUpperContainer_Text] = useState({
    title: "",
    text: ""
  });
  const [serviceData, setServiceData] = useState([]);
  const [serviceSprite, setServiceSprite] = useState("");
  const alterableStyles = useSelector(state => state.alterableStyles);

  const renderData = (data, imageToTheLeft = false, isService = false) => {
    const renderImage = data => (
      <div
        className={
          isService
            ? classes.service_subContainer
            : classes.service_subContainer_large
        }
        style={{
          backgroundImage: `url(${serviceSprite})`,
          backgroundPosition: data.image["desktop"].backgroundPosition,
          backgroundSize: data.image["desktop"].backgroundSize,
          height: data.image["desktop"].height
        }}
      />
    );
    const renderDescription = data => (
      <SlideContainer className={classes.service_subContainer}>
        <div
          className={classes.service_title}
          alterablestyles={alterableStyles}
        >
          {data.title}
        </div>
        <div
          className={classes.service_text}
          alterablestyles={alterableStyles}
        >
          {data.service_text}
        </div>
        <Button
          className={classes.service_button}
          alterablestyles={alterableStyles}
        >
          {data.button}
        </Button>
      </SlideContainer>
    );
    if (imageToTheLeft) {
      return (
        <>
          {renderImage(data, isService)}
          {renderDescription(data)}
        </>
      );
    }
    return (
      <>
        {renderDescription(data)}
        {renderImage(data, isService)}
      </>
    );
  };

  useEffect(() => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve(upperContainertexts);
      }, 300);
    }).then(({ services }) => {
      setUpperContainer_Text(services);
    });
    new Promise(resolve => {
      setTimeout(() => {
        resolve(ourService);
      }, 300);
    }).then(({ data, sprite }) => {
      setServiceData(data);
      setServiceSprite(sprite);
    });
  }, []);

  return (
    <>
      <UpperContainer>
        <div className={classes.upperContainer_wrapper}>
          <div className={classes.upperContainer_title}>
            {upperContainer_text.title.toUpperCase()}
          </div>
          <div className={classes.upperContainer_text}>
            {upperContainer_text.text}
          </div>
          <ScrollContainer />
        </div>
      </UpperContainer>
      <MiddleContainer>
        <AlterableStylesWrapper
          className={classes.middleContainer_innerWrapper}
          alterablestyles={alterableStyles}
        >
        <Container>
            <div className={classes.service_wrapper}>
              
            <SwitchStylesContainer
              when={"reaches_top"}
              scrollEffect={alterableStylesList[1]}
              navbarOnly
            >

            <div className={classes.service_main}>
              {serviceData
                .filter(item => item.image)
                .map((item, index) => (
                  <div
                    className={classes.service_container}
                    key={index}
                  >
                    <div
                      className={classes.service_subContainerWrapper}
                    >
                      {renderData(item, !(index % 2), true)}
                    </div>
                  </div>
                ))}
                </div>
              </SwitchStylesContainer>  
          </div>
              
              
          <div className={classes.send_message_container}>
            <SendMessageContainer />
          </div>
          <div className={classes.footer}>
            <Footer />
          </div>
          </Container>
        </AlterableStylesWrapper>
      </MiddleContainer>
    </>
  );
};
