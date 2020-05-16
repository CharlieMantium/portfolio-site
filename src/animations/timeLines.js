import gsap from 'gsap';

import {
  dropItemTween,
  moveItemTween,
  enterItemFromLeftTween,
  enterItemFromRightTween,
  enterItemFromBottomTween,
  enterItemFromTopTween,
} from './tweens';

export const sideCloudsTl = (left, right) => {
  const tl = gsap.timeline({ defaults: { ease: 'none' } });

  return tl
    .addLabel('start')
    .to(left, { duration: 1, x: '-=50', autoAlpha: 1 })
    .to(left, { duration: 1, x: '-=50', autoAlpha: 0 })
    .to(right, { duration: 1, x: '+=50', autoAlpha: 1 }, 'start')
    .to(right, { duration: 1, x: '+=50', autoAlpha: 0 }, 'start+=1');
};

export const masterTl = (
  button,
  spanHi,
  leftCloud,
  rightCloud,
  spanMyDetails,
  spanNameDetails,
  spanIsDetails,
  spanKarolDetails
) => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  return tl
    .addLabel('start')
    .add(moveItemTween(button))
    .add(dropItemTween(spanHi), 'start')
    .add(sideCloudsTl(leftCloud, rightCloud), '-=0.7')
    .add(enterItemFromLeftTween(spanMyDetails))
    .add(enterItemFromRightTween(spanNameDetails))
    .add(enterItemFromBottomTween(spanIsDetails))
    .add(enterItemFromTopTween(spanKarolDetails));
};
