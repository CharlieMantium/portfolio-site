import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';

import { StyledImg } from 'components/Section/styled';

import leftSideCloud from '../../../static/leftSideCloud.svg';
import rightSideCloud from '../../../static/rightSideCloud.svg';

const SideCloud = React.forwardRef(({ side }, ref) => (
  <div>
    <FormattedMessage id="alternativeDescription.cloud">
      {formattedValue => (
        <StyledImg
          ref={ref}
          src={side === 'left' ? leftSideCloud : rightSideCloud}
          alt={formattedValue}
        />
      )}
    </FormattedMessage>
  </div>
));

SideCloud.propTypes = {
  side: PropTypes.string,
};

SideCloud.defaultProps = {
  side: 'left',
};

export default SideCloud;
