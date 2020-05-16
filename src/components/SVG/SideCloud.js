import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import leftSideCloud from '../../../static/leftSideCloud.svg';
import rightSideCloud from '../../../static/rightSideCloud.svg';

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const SideCloud = React.forwardRef(({ side }, ref) => (
  <div>
    <StyledImg
      ref={ref}
      src={side === 'left' ? leftSideCloud : rightSideCloud}
      alt="Dust cloud"
    />
  </div>
));

SideCloud.propTypes = {
  side: PropTypes.string,
};

SideCloud.defaultProps = {
  side: 'left',
};

export default SideCloud;
