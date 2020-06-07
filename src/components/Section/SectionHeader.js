import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

import { Line } from 'components/Section/styled';

const SectionHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${rem(20)} 0;
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
