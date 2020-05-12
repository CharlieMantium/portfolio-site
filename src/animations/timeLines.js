import gsap from 'gsap';

import { dropButtonTween, dropItemTween, enterSpanTween } from './tweens';

const sideCloudsTl = (left, right) => {
  const tl = gsap.timeline({ defaults: { ease: 'none' } });
  return tl
    .addLabel('start')
    .to(left, { duration: 1, x: '-=50', autoAlpha: 1 })
    .to(left, { duration: 1, x: '-=50', autoAlpha: 0 })
    .to(right, { duration: 1, x: '+=50', autoAlpha: 1 }, 'start')
    .to(right, { duration: 1, x: '+=50', autoAlpha: 0 }, 'start+=1');
};

export const firstClickTl = (span, button, leftCloud, rightCloud) => {
  const tl = gsap.timeline();
  return tl
    .addLabel('start')
    .add(dropButtonTween(button))
    .add(dropItemTween(span), 'start')
    .add(sideCloudsTl(leftCloud, rightCloud), '-=0.7');
};

export const nextClickTl = (enteringSpan, enteringDirection) => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
  return tl.add(enterSpanTween(enteringSpan, enteringDirection));
};
