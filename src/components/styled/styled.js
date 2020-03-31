import styled from 'styled-components';

import { colors, spacing, breakPoints } from 'styles/base';

export const SectionWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.xxxlSize} 0;
`;

export const SectionItemWrapper = styled.div`
  display: flex;
  flex-direction: ${({ isReversed }) => isReversed && 'row-reverse'};
  align-items: center;
  justify-content: space-between;
`;

export const SectionItemIcon = styled.div`
  margin: ${spacing.lSize};
  width: ${spacing.xxxlSize};
  height: ${spacing.xxxlSize};
  color: ${colors.beta};

  @media (min-width: ${breakPoints.desktop}) {
    width: 100px;
    height: 100px;
  }
`;

export const SectionHeader = styled.h2`
  padding: ${spacing.xsSize} ${spacing.xxxlSize};
  border: ${spacing.xxsSize} solid ${colors.delta};
  border-radius: 100px;

  @media (min-width: ${breakPoints.desktop}) {
    padding: ${spacing.sSize} ${spacing.xxxlSize};
  }
`;
