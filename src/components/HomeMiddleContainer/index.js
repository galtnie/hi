import React, { useState, useEffect } from "react";
import { useStyles } from "components/HomeMiddleContainer/styles";
import { useSelector } from "react-redux";
import {
  Partners,
  SlideContainer,
  SwitchStylesContainer,
  TechsUsed
} from "components";
import { ourService, projectList } from "constants/data";
import {
  AlterableStylesWrapper,
  AlterableStylesText,
  AlterableStylesButton
} from "components/HomeMiddleContainer/alterableStyles";
import { alterableStylesList } from "constants/styles";

export default () => {
  const classes = useStyles();

  const [serviceData, setServiceData] = useState([]);
  const [serviceSprite, setServiceSprite] = useState("");
  const [projectData, setProjectData] = useState([]);
  const [projectSprite, setProjectSprite] = useState("");
  const alterableStyles = useSelector(state => state.alterableStyles);

  useEffect(() => {
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
  }, [alterableStyles]);

  const renderImage = (data, isService = false) => (
    <div
      className={isService ? classes.subContainer : classes.subContainer_large}
      style={{
        backgroundImage: `url(${isService ? serviceSprite : projectSprite})`,
        backgroundPosition: data.image["desktop"].backgroundPosition,
        backgroundSize: data.image["desktop"].backgroundSize,
        height: data.image["desktop"].height
      }}
    />
  );

  const renderDescription = data => (
    <SlideContainer className={classes.subContainer}>
      <AlterableStylesText
        className={classes.title}
        alterablestyles={alterableStyles}
      >
        {data.title}
      </AlterableStylesText>
      <AlterableStylesText
        className={classes.text}
        alterablestyles={alterableStyles}
      >
        {data.text}
      </AlterableStylesText>
      <AlterableStylesButton
        className={classes.button}
        alterablestyles={alterableStyles}
      >
        {data.button}
      </AlterableStylesButton>
    </SlideContainer>
  );

  const renderData = (data, imageToTheLeft = false, isService = false) => {
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

  return (
    <div className={classes.wrapper}>
      <AlterableStylesWrapper
        className={classes.innerWrapper}
        alterablestyles={alterableStyles}
      >
        <div className={classes.main}>
          <SwitchStylesContainer
            when={"reaches_top"}
            scrollEffect={alterableStylesList[1]}
            navbarOnly
          >
            {serviceData.map((item, index) =>
              item.image ? (
                <div className={classes.container} key={index}>
                  <div className={classes.subContainerWrapper}>
                    {renderData(item, !!(index % 2), true)}
                  </div>
                </div>
              ) : (
                <div className={classes.container_center} key={index}>
                  <SlideContainer>
                    <div className={classes.subContainerWrapper_center}>
                      <div
                        className={`${classes.title} ${classes.subContainer_center_title}`}
                      >
                        {item.title}
                      </div>
                      <div
                        className={`${classes.text} ${classes.subContainer_center_text}`}
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
              className={`${classes.container} ${classes.container_project}`}
              key={index}
              scrollEffect={alterableStylesList[item.scrollEffect]}
            >
              <SwitchStylesContainer className={classes.subContainerWrapper}>
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
    </div>
  );
};
