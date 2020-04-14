import styled from 'styled-components';
import { rem } from 'polished';

import { colors, breakPoints } from 'styles/base';

export const SectionWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? `${justifyContent}` : 'space-between'};
  padding: ${rem(50)} ${rem(10)};

  @media (min-width: ${breakPoints.largeMobile}) {
    padding: ${rem(50)} ${rem(50)};
  }

  @media (min-width: ${breakPoints.desktop}) {
    padding: ${rem(50)} ${rem(300)};
  }
`;

export const SectionItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ isReversed }) => isReversed && 'row-reverse'};
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${breakPoints.desktop}) {
    padding: ${rem(10)} 0;
  }
`;

export const Icon = styled.div`
  margin: 0 auto;

  & * {
    width: 100%;
    height: 100%;
  }
`;

export const IconWrapper = styled.div`
  width: ${rem(50)};

  @media (min-width: ${breakPoints.desktop}) {
    width: ${rem(100)};
  }
`;

export const SectionHeader = styled.h2`
  padding: ${rem(3)} ${rem(50)};
  border: ${rem(1)} solid ${colors.delta};
  border-radius: ${rem(100)};

  @media (min-width: ${breakPoints.desktop}) {
    padding: ${rem(5)} ${rem(50)};
  }
`;
