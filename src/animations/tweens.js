import gsap from 'gsap';

export const itemAppearTween = itemRef =>
  gsap.to(itemRef, {
    autoAlpha: 1,
    duration: 2,
  });

export const moveItemTween = itemRef =>
  gsap.to(itemRef, {
    y: '+=220',
    ease: 'power4.out',
    duration: 1,
  });

export const dropItemTween = itemRef =>
  gsap.fromTo(
    itemRef,
    { y: '-=300', autoAlpha: 0 },
    {
      y: '+=300',
      duration: 1,
      ease: 'bounce.out',
      autoAlpha: 1,
    }
  );

export const enterItemFromLeftTween = itemRef =>
  gsap.fromTo(
    itemRef,
    { autoAlpha: 0, x: '-=300' },
    { duration: 0.5, autoAlpha: 1, x: '+=300' }
  );

export const enterItemFromRightTween = itemRef =>
  gsap.fromTo(
    itemRef,
    { autoAlpha: 0, x: '+=300' },
    { duration: 0.5, autoAlpha: 1, x: '-=300' }
  );

export const enterItemFromBottomTween = itemRef =>
  gsap.fromTo(
    itemRef,
    { autoAlpha: 0, y: '+=300' },
    { duration: 0.5, autoAlpha: 1, y: '-=300' }
  );

export const enterItemFromTopTween = itemRef =>
  gsap.fromTo(
    itemRef,
    { autoAlpha: 0, y: '-=300' },
    { duration: 0.5, autoAlpha: 1, y: '+=300' }
  );
