import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

import { StyledSectionWrapper } from 'components/Section/styled';

if (ScrollMagicPluginGsap) ScrollMagicPluginGsap(ScrollMagic, gsap);

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
    <StyledSectionWrapper ref={ref} id={id}>
      {children}
    </StyledSectionWrapper>
  );
});

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default Wrapper;
