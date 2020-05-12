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

export const enterSpanTween = (span, direction) => {
  const tweenParams = side => {
    switch (side) {
      case 'fromLeft':
        return [{ x: '-=300' }, { x: '+=300' }];
      case 'fromRight':
        return [{ x: '+=300' }, { x: '-=300' }];
      case 'fromBottom':
        return [{ y: '+=300' }, { y: '-=300' }];
      case 'fromTop':
        return [{ y: '-=300' }, { y: '+=300' }];
      default:
        return [{ y: '-=300' }, { y: '+=300' }];
    }
  };
  gsap.fromTo(
    span,
    { autoAlpha: 0, ...tweenParams(direction)[0] },
    { duration: 0.5, autoAlpha: 1, ...tweenParams(direction)[1] }
  );
};
