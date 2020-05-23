import React from 'react';
import PropTypes from 'prop-types';

import { StyledImg } from 'components/Section/styled';

import leftSideCloud from '../../../static/leftSideCloud.svg';
import rightSideCloud from '../../../static/rightSideCloud.svg';

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
