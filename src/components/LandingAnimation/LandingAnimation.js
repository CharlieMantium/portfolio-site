import React, { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { colors, fonts } from 'styles/base';
import { itemAppearTween } from 'animations/tweens';
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
    itemAppearTween(animationButtonRef.current);
    if (isAnimationPlaying === true)
      masterTl(
        animationButtonRef.current,
        spanHiRef.current,
        leftSideCloudRef.current,
        rightSideCloudRef.current,
        spanMyRef.current,
        spanNameRef.current,
        spanIsRef.current,
        spanKarolRef.current
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
