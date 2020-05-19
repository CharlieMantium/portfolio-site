import gsap from 'gsap';

export const appearItemTween = (itemRef, duration, delay = 0) =>
  gsap.to(itemRef, {
    autoAlpha: 1,
    duration,
    delay,
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

export const enterItemFromLeftTween = (itemRef, distance) =>
  gsap.fromTo(
    itemRef,
    { autoAlpha: 0, x: `-=${distance}` },
    {
      duration: 0.5,
      autoAlpha: 1,
      x: `+=${distance}`,
    }
  );

export const enterItemFromRightTween = (itemRef, distance) =>
  gsap.fromTo(
    itemRef,
    { autoAlpha: 0, x: `+=${distance}` },
    { duration: 0.5, autoAlpha: 1, x: `-=${distance}` }
  );

export const enterItemFromBottomTween = (itemRef, distance) =>
  gsap.fromTo(
    itemRef,
    { autoAlpha: 0, y: `+=${distance}` },
    { duration: 0.5, autoAlpha: 1, y: `-=${distance}` }
  );

export const enterItemFromTopTween = (itemRef, distance) =>
  gsap.fromTo(
    itemRef,
    { autoAlpha: 0, y: `-=${distance}` },
    { duration: 0.5, autoAlpha: 1, y: `+=${distance}` }
  );

export const hideItemTween = (itemRef, duration) =>
  gsap.to(itemRef, { autoAlpha: 0, duration });
