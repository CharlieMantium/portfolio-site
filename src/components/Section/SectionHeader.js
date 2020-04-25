import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

import { breakPoints, colors } from 'styles/base';

const SectionHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${rem(20)} 0;
`;

const Line = styled.hr`
  width: ${rem(50)};
  border: 0;
  height: 1px;
  background-image: ${({ isReversed }) =>
    isReversed
      ? `linear-gradient(to right, ${colors.beta}, ${colors.alpha})`
      : `linear-gradient(to right, ${colors.alpha}, ${colors.beta})`};

  @media (min-width: ${breakPoints.largeMobile}) {
    width: ${rem(200)};
  }
`;

const HeaderText = styled.h2`
  margin: 0 ${rem(20)};
  text-align: center;
`;

const SectionHeader = ({ children }) => (
  <SectionHeaderWrapper>
    <Line />
    <HeaderText>{children}</HeaderText>
    <Line isReversed />
  </SectionHeaderWrapper>
);

SectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionHeader;
