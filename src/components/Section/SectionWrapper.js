import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import gsap from 'gsap';
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

import { breakPoints } from 'styles/base';

if (ScrollMagic) ScrollMagicPluginGsap(ScrollMagic, gsap);

const SectionWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${rem(50)} ${rem(10)};

  @media (min-width: ${breakPoints.largeMobile}) {
    padding: ${rem(50)} ${rem(50)};
  }

  @media (min-width: ${breakPoints.desktop}) {
    padding: ${rem(50)} ${rem(300)};
  }
`;

const Wrapper = React.forwardRef(({ children, id }, ref) => {
  if (ref) {
    useEffect(() => {
      const elements = ref.current.children;
      const tween = gsap.fromTo(
        elements,
        { y: '+=200', autoAlpha: 0 },
        {
          duration: 1,
          ease: 'bounce.out',
          y: '-=200',
          autoAlpha: 1,
          paused: true,
        }
      );
      const controller = new ScrollMagic.Controller();
      new ScrollMagic.Scene({
        triggerElement: `#${id}`,
        triggerHook: 0.5,
      })
        .setTween(tween)
        .addTo(controller);
    });
  }

  return (
    <SectionWrapper ref={ref && ref} id={id}>
      {children}
    </SectionWrapper>
  );
});

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default Wrapper;
