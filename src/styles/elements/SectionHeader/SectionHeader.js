import styled from 'styled-components';

import { colors, spacing, breakPoints } from '../../base';

const SectionHeader = styled.h2`
  margin-top: ${spacing.xxxxlSize};
  padding: ${spacing.xsSize} ${spacing.xxxlSize};
  border: ${spacing.xxsSize} solid ${colors.delta};
  border-radius: 100px;

  @media (min-width: ${breakPoints.desktop}) {
    padding: ${spacing.sSize} ${spacing.xxxlSize};
  }
`;
// any ideas how to do that border-radius effect with "%"?

export default SectionHeader;
