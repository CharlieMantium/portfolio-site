import styled from 'styled-components';
import { rem } from 'polished';

import { colors, breakPoints } from 'styles/base';

export const SectionWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${rem('50px')} 0;
`;

export const SectionItemWrapper = styled.div`
  display: flex;
  flex-direction: ${({ isReversed }) => isReversed && 'row-reverse'};
  align-items: center;
  justify-content: space-between;
`;

export const SectionItemIcon = styled.div`
  margin: ${rem('15px')};
  width: ${rem('50px')};
  height: ${rem('50px')};
  color: ${colors.beta};

  @media (min-width: ${breakPoints.desktop}) {
    width: ${rem('100px')};
    height: ${rem('100px')};
  }
`;

export const SectionHeader = styled.h2`
  padding: ${rem('3px')} ${rem('50px')};
  border: ${rem('1px')} solid ${colors.delta};
  border-radius: ${rem('100px')};

  @media (min-width: ${breakPoints.desktop}) {
    padding: ${rem('5px')} ${rem('50px')};
  }
`;
