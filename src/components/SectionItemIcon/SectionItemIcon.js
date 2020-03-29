import styled from 'styled-components';

import { colors, spacing, breakPoints } from 'styles/base';

const SectionItemIcon = styled.div`
  margin: ${spacing.lSize};
  width: ${spacing.xxxlSize};
  height: ${spacing.xxxlSize};
  color: ${colors.beta};

  @media (min-width: ${breakPoints.desktop}) {
    width: 100px;
    height: 100px;
  }
`;

export default SectionItemIcon;
