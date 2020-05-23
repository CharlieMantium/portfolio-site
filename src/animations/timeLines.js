import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

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

gsap.registerPlugin(MotionPathPlugin);

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

export const debrisFlyTl = debrisRef => {
  const tl = gsap.timeline({ defaults: { ease: 'none' } });
  gsap.set(debrisRef, { transformOrigin: '50% 50%' });
  const maxX = Math.floor(500 - Math.random() * 1000);
  const maxY = -Math.floor(Math.random() * 300);
  const path = [
    { x: 0, y: 0 },
    { x: maxX / 2, y: maxY },
    { x: maxX, y: 0 },
  ];

  return tl
    .to(debrisRef, {
      duration: 0.7,
      autoAlpha: 1,
      motionPath: {
        path,
        start: 0,
        end: 0.5,
      },
      rotation: '180',
    })
    .to(debrisRef, {
      duration: 0.7,
      autoAlpha: 0,
      motionPath: { path, start: 0.66, end: 1 },
      rotation: '-180',
    })
    .to(debrisRef, { x: 0, y: 0, duration: 0.1 });
};

export const explosionTl = (cloudRef, debrisRef) => {
  const tl = gsap.timeline({
    defaults: { transformOrigin: '50% 70%', ease: 'slow' },
  });
  const [debrisOneRef, debrisTwoRef, debrisThreeRef, debrisFourRef] = debrisRef;

  return tl
    .addLabel('start')
    .fromTo(
      cloudRef,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: 1, duration: 0.1 }
    )
    .to(cloudRef, { autoAlpha: 0, scale: 0.97, duration: 1 })
    .add(debrisFlyTl(debrisOneRef), 'start')
    .add(debrisFlyTl(debrisTwoRef), 'start')
    .add(debrisFlyTl(debrisThreeRef), 'start')
    .add(debrisFlyTl(debrisFourRef), 'start');
};

export const enterNextItemTl = (
  enteringDirection,
  enteringSpan,
  currentSpan,
  newSpan,
  cloud,
  debris
) => {
  const tl = gsap.timeline({ defaults: { ease: 'none' } });

  return tl
    .add(enteringDirection(enteringSpan, 300))
    .add(hideItemTween(currentSpan, 0.1))
    .add(hideItemTween(enteringSpan, 0.3), '-=0.3')
    .addLabel('explosion')
    .add(explosionTl(cloud, debris))
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
  mushroomCloud,
  debris
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
        bigCloud,
        debris
      )
    )
    .add(
      enterNextItemTl(
        enterItemFromRightTween,
        nameSpan,
        hiMySpan,
        hiMyNameSpan,
        spiralCloud,
        debris
      )
    )
    .add(
      enterNextItemTl(
        enterItemFromBottomTween,
        isSpan,
        hiMyNameSpan,
        hiMyNameIsSpan,
        bigCloud,
        debris
      )
    )
    .add(
      enterNextItemTl(
        enterItemFromTopTween,
        karolSpan,
        hiMyNameIsSpan,
        hiMyNameIsKarolSpan,
        mushroomCloud,
        debris
      )
    )
    .add(sideCloudsTl(leftCloud, rightCloud), '-=2.5');
};
