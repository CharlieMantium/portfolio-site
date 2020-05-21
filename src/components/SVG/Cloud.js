import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import bigCloud from '../../../static/bigCloud.svg';

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const CloudWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  width: 100%;
`;

const Cloud = React.forwardRef(({ src }, ref) => (
  <CloudWrapper>
    <StyledImg ref={ref} src={src} alt="Cloud of Dust" />
  </CloudWrapper>
));

Cloud.propTypes = {
  src: PropTypes.string,
};

Cloud.defaultProps = {
  src: bigCloud,
};

export default Cloud;
