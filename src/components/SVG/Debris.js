import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { StyledImg } from 'components/Section/styled';

import debris from '../../../static/debris.svg';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${rem(10)};
`;

const Debris = React.forwardRef((props, ref) => (
  <Wrapper>
    <StyledImg ref={ref} src={debris} alt="Debris" />
  </Wrapper>
));

export default Debris;
