import React, { useState, useEffect, useCallback, useRef } from "react";
import { useStyles } from "containers/home/styles";
import { useSelector } from "react-redux";
import {
  Footer,
  LowerContainer,
  MiddleContainer,
  Partners,
  ProjectKickoff,
  ScrollContainer,
  SendMessageButton,
  SlideContainer,
  SwitchStylesContainer,
  TechsUsed,
  UpperContainer
} from "components";
import { Button } from "@material-ui/core/";
import {
  AlterableStylesWrapper,
  AlterableStylesText,
  AlterableStylesButton
} from "containers/home/styledComponents";
import { ourService, projectList, upperContainertexts } from "constants/data";
import { alterableStylesList } from "constants/styles";

export default () => {
  const classes = useStyles();

  const [upperContainerRendered, setUpperContainerRendered] = useState(true);
  const [upperContainer_text, setUpperContainer_Text] = useState({
    title: "",
    text: "",
    button: "",
    image: null
  });
  const [serviceData, setServiceData] = useState([]);
  const [serviceSprite, setServiceSprite] = useState("");
  const [projectData, setProjectData] = useState([]);
  const [projectSprite, setProjectSprite] = useState("");
  const alterableStyles = useSelector(state => state.alterableStyles);
  let upper = useRef(null);

  const switchZindex = useCallback(() => {
    const halfScreenHeight =
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight) /
      2;
    const currentHeight = document.documentElement.scrollTop;
    if (halfScreenHeight > currentHeight && !upper.current) {
      upper.current = true;
      !upperContainerRendered && setUpperContainerRendered(true);
    }
    if (halfScreenHeight < currentHeight && upper.current) {
      upper.current = false;
      upperContainerRendered && setUpperContainerRendered(false);
    }
  }, [upperContainerRendered]);

  const renderData = (data, imageToTheLeft = false, isService = false) => {
    const renderImage = (data, isService = false) => (
      <div
        className={
          isService
            ? classes.middleContainer_subContainer
            : classes.middleContainer_subContainer_large
        }
        style={{
          backgroundImage: `url(${isService ? serviceSprite : projectSprite})`,
          backgroundPosition: data.image["desktop"].backgroundPosition,
          backgroundSize: data.image["desktop"].backgroundSize,
          height: data.image["desktop"].height
        }}
      />
    );
    const renderDescription = data => (
      <SlideContainer className={classes.middleContainer_subContainer}>
        <AlterableStylesText
          className={classes.middleContainer_title}
          alterablestyles={alterableStyles}
        >
          {data.title}
        </AlterableStylesText>
        <AlterableStylesText
          className={classes.middleContainer_text}
          alterablestyles={alterableStyles}
        >
          {data.text}
        </AlterableStylesText>
        <AlterableStylesButton
          className={classes.middleContainer_button}
          alterablestyles={alterableStyles}
        >
          {data.button}
        </AlterableStylesButton>
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
    switchZindex();
    window.addEventListener("scroll", switchZindex, { passive: true });
    return () => window.removeEventListener("scroll", switchZindex);
  }, [switchZindex]);

  useEffect(() => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve(upperContainertexts);
      }, 300);
    }).then(({ home }) => {
      setUpperContainer_Text(home);
    });
    new Promise(resolve => {
      setTimeout(() => {
        resolve(ourService);
      }, 300);
    }).then(({ data, sprite }) => {
      setServiceData(data);
      setServiceSprite(sprite);
    });
    new Promise(resolve => {
      setTimeout(() => {
        resolve(projectList);
      }, 300);
    }).then(({ data, sprite }) => {
      setProjectData(data);
      setProjectSprite(sprite);
    });
  }, []);

  return (
    <div>
      <UpperContainer highZindex={upperContainerRendered}>
        <div className={classes.upperContainer_main}>
          <div className={classes.upperContainer_text}>
            {upperContainer_text.text}
          </div>
          <div
            className={classes.upperContainer_image}
            style={{
              background: `url(${upperContainer_text.image}) center no-repeat`
            }}
          />
          {upperContainer_text.button && (
            <Button
              className={classes.upperContainer_button}
              size="large"
              variant="outlined"
            >
              {upperContainer_text.button}
            </Button>
          )}
        </div>
        <ScrollContainer />
      </UpperContainer>

      <MiddleContainer last>
        <AlterableStylesWrapper
          className={classes.middleContainer_innerWrapper}
          alterablestyles={alterableStyles}
        >
          <div className={classes.middleContainer_main}>
            <SwitchStylesContainer
              when={"reaches_top"}
              scrollEffect={alterableStylesList[1]}
              navbarOnly
            >
              {serviceData.map((item, index) =>
                item.image ? (
                  <div
                    className={classes.middleContainer_container}
                    key={index}
                  >
                    <div
                      className={classes.middleContainer_subContainerWrapper}
                    >
                      {renderData(item, !!(index % 2), true)}
                    </div>
                  </div>
                ) : (
                  <div
                    className={classes.middleContainer_container_center}
                    key={index}
                  >
                    <SlideContainer>
                      <div
                        className={
                          classes.middleContainer_subContainerWrapper_center
                        }
                      >
                        <div
                          className={`${classes.middleContainer_title} ${classes.middleContainer_subContainer_center_title}`}
                        >
                          {item.title}
                        </div>
                        <div
                          className={`${classes.middleContainer_text} ${classes.middleContainer_subContainer_center_text}`}
                        >
                          {item.text}
                        </div>
                      </div>
                    </SlideContainer>
                  </div>
                )
              )}
            </SwitchStylesContainer>
            {projectData.map((item, index) => (
              <SwitchStylesContainer
                className={`${classes.middleContainer_container} ${classes.middleContainer_container_project}`}
                key={index}
                scrollEffect={alterableStylesList[item.scrollEffect]}
              >
                <SwitchStylesContainer
                  className={classes.middleContainer_subContainerWrapper}
                >
                  {renderData(item, !(index % 2))}
                </SwitchStylesContainer>
              </SwitchStylesContainer>
            ))}
          </div>
        </AlterableStylesWrapper>
        <SwitchStylesContainer
          when={"reaches_top"}
          scrollEffect={alterableStylesList[5]}
          bottom
        >
          <TechsUsed />
          <Partners />
        </SwitchStylesContainer>
      </MiddleContainer>

      <LowerContainer highZindex={!upperContainerRendered}>
        <div className={classes.lowerContainer_upperPart}>
          <ProjectKickoff />
          <SendMessageButton linkToContacts />
        </div>
        <div className={classes.lowerContainer_lowerPart}>
          <Footer />
        </div>
      </LowerContainer>
    </div>
  );
};
