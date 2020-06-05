import React, { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { rem } from 'polished';

import { colors, fonts } from 'styles/base';
import { appearItemTween } from 'animations/tweens';
import { masterTl } from 'animations/timeLines';

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
  transform: ${({ isButtonInPlace }) =>
    isButtonInPlace ? `translate(-50%, ${rem(220)})` : 'translate(-50%, -50%)'};
  z-index: 100;
  padding: ${rem(10)};
  border: ${rem(3)} solid ${colors.delta};
  border-radius: ${rem(5)};
  color: ${colors.alpha};
  opacity: 0;
  font-family: ${fonts.families.headerFont};
  font-size: ${rem(25)};
  transition: transform 0.5s ease-in-out;
`;

const StyledMessage = styled.p`
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
  const [isButtonInPlace, setIsButtonInPlace] = useState(false);
  const [animationButtonTextId, setAnimationButtonTextId] = useState(
    'animation.play'
  );
  const handelAnimationButtonClick = () => {
    if (!isAnimationPlaying) {
      setAnimationPlay(true);
      setIsButtonInPlace(true);
    }
  };

  const animationButtonRef = createRef();
  const firstMessageRef = createRef();
  const secondMessageRef = createRef();
  const firstToSecondMessageRef = createRef();
  const thirdMessageRef = createRef();
  const firstToThirdMessageRef = createRef();
  const fourthMessageRef = createRef();
  const firstToFourthMessageRef = createRef();
  const fifthMessageRef = createRef();
  const firstToFifthMessageRef = createRef();
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
      masterTl(
        animationButtonRef.current,
        firstMessageRef.current,
        secondMessageRef.current,
        firstToSecondMessageRef.current,
        thirdMessageRef.current,
        firstToThirdMessageRef.current,
        fourthMessageRef.current,
        firstToFourthMessageRef.current,
        fifthMessageRef.current,
        firstToFifthMessageRef.current,
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
        false,
        setAnimationButtonTextId,
        'animation.replay'
      );
    }
  }, [isAnimationPlaying]);

  return (
    <LandingAnimationWrapper>
      <StartButton
        ref={animationButtonRef}
        onClick={handelAnimationButtonClick}
        isButtonInPlace={isButtonInPlace}
      >
        <FormattedMessage id={animationButtonTextId} />
      </StartButton>
      <StyledMessage ref={firstMessageRef}>
        <FormattedMessage id="animation.firstMessage" />
      </StyledMessage>
      <StyledMessage ref={secondMessageRef}>
        <FormattedMessage id="animation.secondMessage" />
      </StyledMessage>
      <StyledMessage ref={firstToSecondMessageRef}>
        <FormattedMessage id="animation.firstToSecondMessage" />
      </StyledMessage>
      <StyledMessage ref={thirdMessageRef}>
        <FormattedMessage id="animation.thirdMessage" />
      </StyledMessage>
      <StyledMessage ref={firstToThirdMessageRef}>
        <FormattedMessage id="animation.firstToThirdMessage" />
      </StyledMessage>
      <StyledMessage ref={fourthMessageRef}>
        <FormattedMessage id="animation.fourthMessage" />
      </StyledMessage>
      <StyledMessage ref={firstToFourthMessageRef}>
        <FormattedMessage id="animation.firstToFourthMessage" />
      </StyledMessage>
      <StyledMessage ref={fifthMessageRef}>
        <FormattedMessage id="animation.fifthMessage" />
      </StyledMessage>
      <StyledMessage ref={firstToFifthMessageRef}>
        <FormattedMessage id="animation.firstToFifthMessage" />
      </StyledMessage>
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
