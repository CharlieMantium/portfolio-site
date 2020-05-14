import React, { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { colors, fonts } from 'styles/base';
import { buttonAppearTween } from 'animations/tweens';
import { masterTl } from 'animations/timeLines';

import SideCloud from '../SVG/SideCloud';

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
  const handelAnimationButtonClick = () => setAnimationPlay(true);

  const animationButtonRef = createRef();
  const spanHiRef = createRef();
  const spanMyRef = createRef();
  const spanNameRef = createRef();
  const spanIsRef = createRef();
  const spanKarolRef = createRef();
  const leftSideCloudRef = createRef();
  const rightSideCloudRef = createRef();

  useEffect(() => {
    const animationButton = animationButtonRef.current;
    const spanHi = spanHiRef.current;
    const spanMy = spanMyRef.current;
    const spanName = spanNameRef.current;
    const spanIs = spanIsRef.current;
    const spanKarol = spanKarolRef.current;
    const leftSideCloud = leftSideCloudRef.current;
    const rightSideCloud = rightSideCloudRef.current;

    buttonAppearTween(animationButton);
    if (isAnimationPlaying === true)
      masterTl(
        animationButton,
        spanHi,
        leftSideCloud,
        rightSideCloud,
        spanMy,
        spanName,
        spanIs,
        spanKarol
      );
  });

  return (
    <LandingAnimationWrapper>
      <StartButton
        ref={animationButtonRef}
        onClick={handelAnimationButtonClick}
      >
        Press to say &apos;Hello!&apos;
      </StartButton>
      <StyledSpan ref={spanHiRef}>Hi!</StyledSpan>
      <StyledSpan ref={spanMyRef}>My</StyledSpan>
      <StyledSpan ref={spanNameRef}>name</StyledSpan>
      <StyledSpan ref={spanIsRef}>is</StyledSpan>
      <StyledSpan ref={spanKarolRef}>Karol</StyledSpan>
      <SideCloudsWrapper>
        <SideCloud ref={leftSideCloudRef} side="left" />
        <SideCloud ref={rightSideCloudRef} side="right" />
      </SideCloudsWrapper>
    </LandingAnimationWrapper>
  );
};

export default LandingAnimation;
