import React from 'react';
import styled from 'styled-components';

import { rem } from 'polished';

const FooterText = styled.p`
  margin: ${rem(8)} 0;
  text-align: center;
`;

const Footer = () => (
  <div>
    <FooterText>Karol Zieniewicz &reg; 2020</FooterText>
  </div>
);

export default Footer;
