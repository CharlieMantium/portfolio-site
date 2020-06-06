import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';

import { StyledImg } from 'components/Section/styled';

import bigCloud from '../../../static/bigCloud.svg';

const CloudWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;

const Cloud = React.forwardRef(({ src }, ref) => (
  <CloudWrapper>
    <FormattedMessage id="alternativeDescription.cloud">
      {formattedValue => <StyledImg ref={ref} src={src} alt={formattedValue} />}
    </FormattedMessage>
  </CloudWrapper>
));

Cloud.propTypes = {
  src: PropTypes.string,
};

Cloud.defaultProps = {
  src: bigCloud,
};

export default Cloud;
