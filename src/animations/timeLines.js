import gsap from 'gsap';

import {
  dropItemTween,
  moveItemTween,
  enterItemFromLeftTween,
  enterItemFromRightTween,
  enterItemFromBottomTween,
  enterItemFromTopTween,
  hideItemTween,
  appearItemTween,
} from './tweens';

export const sideCloudsTl = (left, right) => {
  const tl = gsap.timeline({ defaults: { ease: 'none' } });

  return tl
    .addLabel('start')
    .to(left, { duration: 1, x: '-=50', autoAlpha: 1 })
    .to(left, { duration: 1, x: '-=50', autoAlpha: 0 })
    .to(left, { duration: 0.1, x: '+=100' })
    .to(right, { duration: 1, x: '+=50', autoAlpha: 1 }, 'start')
    .to(right, { duration: 1, x: '+=50', autoAlpha: 0 }, 'start+=1')
    .to(right, { duration: 0.1, x: '-=100' }, 'start+=2');
};

export const explosionTl = cloudRef => {
  const tl = gsap.timeline({
    defaults: { transformOrigin: '50% 70%', ease: 'slow' },
  });

  return tl
    .fromTo(
      cloudRef,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: 1, duration: 0.1 }
    )
    .to(cloudRef, { autoAlpha: 0, duration: 1 });
};

export const enterNextItemTl = (
  enteringDirection,
  enteringSpan,
  currentSpan,
  newSpan,
  cloud
) => {
  const tl = gsap.timeline({ defaults: { ease: 'none' } });

  return tl
    .add(enteringDirection(enteringSpan, 300))
    .add(hideItemTween(currentSpan, 0.1))
    .add(hideItemTween(enteringSpan, 0.3), '-=0.3')
    .addLabel('explosion')
    .add(explosionTl(cloud))
    .add(appearItemTween(newSpan, 2, 0.5), 'explosion');
};

export const masterTl = (
  button,
  hiSpan,
  mySpan,
  hiMySpan,
  nameSpan,
  hiMyNameSpan,
  isSpan,
  hiMyNameIsSpan,
  karolSpan,
  hiMyNameIsKarolSpan,
  leftCloud,
  rightCloud,
  bigCloud,
  spiralCloud,
  mushroomCloud
) => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  return tl
    .addLabel('start')
    .add(moveItemTween(button))
    .add(dropItemTween(hiSpan), 'start')
    .add(sideCloudsTl(leftCloud, rightCloud), '-=0.7')
    .add(
      enterNextItemTl(
        enterItemFromLeftTween,
        mySpan,
        hiSpan,
        hiMySpan,
        bigCloud
      )
    )
    .add(
      enterNextItemTl(
        enterItemFromRightTween,
        nameSpan,
        hiMySpan,
        hiMyNameSpan,
        spiralCloud
      )
    )
    .add(
      enterNextItemTl(
        enterItemFromBottomTween,
        isSpan,
        hiMyNameSpan,
        hiMyNameIsSpan,
        bigCloud
      )
    )
    .add(
      enterNextItemTl(
        enterItemFromTopTween,
        karolSpan,
        hiMyNameIsSpan,
        hiMyNameIsKarolSpan,
        mushroomCloud
      )
    )
    .add(sideCloudsTl(leftCloud, rightCloud), '-=2.5');
};
