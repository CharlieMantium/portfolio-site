import gsap from 'gsap';

export const buttonAppearTween = button =>
  gsap.to(button, {
    autoAlpha: 1,
    duration: 2,
  });

export const dropButtonTween = button =>
  gsap.to(button, {
    y: '+=220',
    ease: 'power4.out',
    duration: 1,
  });

export const dropItemTween = item =>
  gsap.fromTo(
    item,
    { y: '-=300', autoAlpha: 0 },
    {
      y: '+=300',
      duration: 1,
      ease: 'bounce.out',
      autoAlpha: 1,
    }
  );

export const enterSpanFromLeftTween = span =>
  gsap.fromTo(
    span,
    { autoAlpha: 0, x: '-=300' },
    { duration: 0.5, autoAlpha: 1, x: '+=300' }
  );

export const enterSpanFromRightTween = span =>
  gsap.fromTo(
    span,
    { autoAlpha: 0, x: '+=300' },
    { duration: 0.5, autoAlpha: 1, x: '-=300' }
  );

export const enterSpanFromBottomTween = span =>
  gsap.fromTo(
    span,
    { autoAlpha: 0, y: '+=300' },
    { duration: 0.5, autoAlpha: 1, y: '-=300' }
  );

export const enterSpanFromTopTween = span =>
  gsap.fromTo(
    span,
    { autoAlpha: 0, y: '-=300' },
    { duration: 0.5, autoAlpha: 1, y: '+=300' }
  );
