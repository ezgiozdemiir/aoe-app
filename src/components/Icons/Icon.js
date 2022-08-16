import React from 'react';

import { FA } from './ForwardArrowIcon';
import { BA } from './BackArrowIcon';

const IconName = {
  ForwardArrow: <FA />,
  BackArrow: <BA />,
};

const Icon = (props) => {
  const icon = props.name;
  return IconName[icon];
};

export default Icon;
