import React, { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { colors, fonts } from 'styles/base';
import { appearItemTween, hideItemTween } from 'animations/tweens';
import { masterTl, moveHideItemAndChangeContentTl } from 'animations/timeLines';

import SideCloud from '../SVG/SideCloud';
import Cloud from '../SVG/Cloud';
import Debris from '../SVG/Debris';
import bigCloud from '../../../static/bigCloud.svg';
import spiralCloud from '../../../static/spiralCloud.svg';
import mushroomCloud from '../../../static/mushroomCloud.svg';

const LandingAnimationWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StartButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: ${rem(10)};
  border: ${rem(3)} solid ${colors.delta};
  border-radius: ${rem(5)};
  color: ${colors.alpha};
  opacity: 0;
  font-family: ${fonts.families.headerFont};
  font-size: ${rem(25)};
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${rem(10)};
  border: ${rem(3)} solid ${colors.delta};
  border-radius: ${rem(5)};
  opacity: 0;
  color: ${colors.alpha};
  background-color: ${colors.beta};
  font-family: ${fonts.families.headerFont};
  font-size: ${rem(25)};
  text-align: center;
`;

const SideCloudsWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LandingAnimation = () => {
  const [isAnimationPlaying, setAnimationPlay] = useState(false);
  const [isAnimationReplaying, setAnimationReplay] = useState(false);
  const [animationButtonText, setAnimationButtonText] = useState(
    'Press to say "Hello!"'
  );
  const handelAnimationButtonClick = () => {
    if (isAnimationPlaying === false) setAnimationPlay(true);
  };

  const animationButtonRef = createRef();
  const hiSpanRef = createRef();
  const mySpanRef = createRef();
  const hiMySpanRef = createRef();
  const nameSpanRef = createRef();
  const hiMyNameSpanRef = createRef();
  const isSpanRef = createRef();
  const hiMyNameIsSpanRef = createRef();
  const karolSpanRef = createRef();
  const hiMyNameIsKarolSpanRef = createRef();
  const leftSideCloudRef = createRef();
  const rightSideCloudRef = createRef();
  const bigCloudRef = createRef();
  const spiralCloudRef = createRef();
  const mushroomCloudRef = createRef();
  const debrisOneRef = createRef();
  const debrisTwoRef = createRef();
  const debrisThreeRef = createRef();
  const debrisFourRef = createRef();

  useEffect(() => {
    appearItemTween(animationButtonRef.current, 2);
  }, [isAnimationPlaying]);

  useEffect(() => {
    if (isAnimationPlaying) {
      if (isAnimationReplaying) {
        hideItemTween(animationButtonRef.current, 2, 1);
      } else {
        moveHideItemAndChangeContentTl(
          animationButtonRef.current,
          setAnimationButtonText,
          ['Replay?']
        );
        setAnimationReplay(true);
      }
      masterTl(
        animationButtonRef.current,
        hiSpanRef.current,
        mySpanRef.current,
        hiMySpanRef.current,
        nameSpanRef.current,
        hiMyNameSpanRef.current,
        isSpanRef.current,
        hiMyNameIsSpanRef.current,
        karolSpanRef.current,
        hiMyNameIsKarolSpanRef.current,
        leftSideCloudRef.current,
        rightSideCloudRef.current,
        bigCloudRef.current,
        spiralCloudRef.current,
        mushroomCloudRef.current,
        [
          debrisOneRef.current,
          debrisTwoRef.current,
          debrisThreeRef.current,
          debrisFourRef.current,
        ],
        setAnimationPlay,
        false
      );
    }
  }, [isAnimationPlaying]);

  return (
    <LandingAnimationWrapper>
      <StartButton
        ref={animationButtonRef}
        onClick={handelAnimationButtonClick}
      >
        {animationButtonText}
      </StartButton>
      <StyledSpan ref={hiSpanRef}>Hi!</StyledSpan>
      <StyledSpan ref={mySpanRef}>My</StyledSpan>
      <StyledSpan ref={hiMySpanRef}>Hi! My</StyledSpan>
      <StyledSpan ref={nameSpanRef}>name</StyledSpan>
      <StyledSpan ref={hiMyNameSpanRef}>Hi! My name</StyledSpan>
      <StyledSpan ref={isSpanRef}>is</StyledSpan>
      <StyledSpan ref={hiMyNameIsSpanRef}>Hi! My name is</StyledSpan>
      <StyledSpan ref={karolSpanRef}>Karol</StyledSpan>
      <StyledSpan ref={hiMyNameIsKarolSpanRef}>Hi! My name is Karol</StyledSpan>
      <SideCloudsWrapper>
        <SideCloud ref={leftSideCloudRef} side="left" />
        <SideCloud ref={rightSideCloudRef} side="right" />
      </SideCloudsWrapper>
      <Cloud ref={bigCloudRef} src={bigCloud} />
      <Cloud ref={spiralCloudRef} src={spiralCloud} />
      <Cloud ref={mushroomCloudRef} src={mushroomCloud} />
      <Debris ref={debrisOneRef} />
      <Debris ref={debrisTwoRef} />
      <Debris ref={debrisThreeRef} />
      <Debris ref={debrisFourRef} />
    </LandingAnimationWrapper>
  );
};

export default LandingAnimation;
