import styled from 'styled-components';

import { colors, spacing, breakPoints } from 'styles/base';

const SectionItemIcon = styled.div`
  margin: ${spacing.lSize};
  width: ${spacing.xxxlSize};
  height: ${spacing.xxxlSize};
  color: ${colors.beta};

  @media (min-width: ${breakPoints.desktop}) {
    width: ${spacing.xxxxlSize};
    height: ${spacing.xxxxlSize};
  }
`;

export default SectionItemIcon;
