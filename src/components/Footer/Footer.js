import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { fonts } from 'styles/base';
import { FormattedMessage } from 'gatsby-plugin-intl';

const FooterMainText = styled.p`
  margin: ${rem(8)} 0;
  text-align: center;
`;

const FooterSideText = styled.p`
  margin: ${rem(4)} 0;
  font-size: ${fonts.sizes.xs};
  text-align: center;
`;

const Footer = () => (
  <footer>
    <FooterMainText>
      Karol Zieniewicz &reg;&nbsp;
      {new Date().getFullYear()}
    </FooterMainText>
    <FooterSideText>
      <FormattedMessage
        id="linkTo.cloudGraphicsSource"
        values={{
          a: (...chunks) => (
            <a
              href="http://www.freepik.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {chunks}
            </a>
          ),
          linkText: 'pch.vector / Freepik',
        }}
      />
    </FooterSideText>
  </footer>
);

export default Footer;
