import styled from 'styled-components';

import { spacing } from 'styles/base';

const SectionWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.xxxlSize} 0;
`;

export default SectionWrapper;
