import gsap from 'gsap';
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

ScrollMagicPluginGsap(ScrollMagic, gsap);

const onScrollAnimate = (animatedSectionWrapper, id) => {
  const elements = animatedSectionWrapper.current.children;

  const appearTween = gsap.fromTo(
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
    .setTween(appearTween)
    .addTo(controller);
};

export default onScrollAnimate;
