import styled from 'styled-components';
import { rem } from 'polished';

import { colors, breakPoints } from 'styles/base';

export const SectionWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${rem(50)} 0;
`;

export const SectionItemWrapper = styled.div`
  display: flex;
  flex-direction: ${({ isReversed }) => isReversed && 'row-reverse'};
  align-items: center;
  justify-content: space-between;
`;

export const SectionItemIcon = styled.div`
  margin: ${rem(15)};
  width: ${rem(50)};
  height: ${rem(50)};
  color: ${colors.beta};

  @media (min-width: ${breakPoints.desktop}) {
    width: ${rem(100)};
    height: ${rem(100)};
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
