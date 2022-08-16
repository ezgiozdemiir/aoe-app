import * as React from 'react';
import { Box } from '@mui/material';

import './Slider.scss';
import Slider from './SliderGroupItem';

const SliderGroup = (props) => {
  const { switchValue, switchOn } = props;

  return (
    <Box width={300}>
      <div className='slider-group'>
        <Slider {...props} name='wood' />
        <span>{!switchOn['wood'] ? switchValue.wood : '-'}</span>
      </div>
      <div className='slider-group'>
        <Slider {...props} name='food' />
        <span>{!switchOn['food'] ? switchValue.food : '-'}</span>
      </div>
      <div className='slider-group'>
        <Slider {...props} name='gold' />
        <span>{!switchOn['gold'] ? switchValue.gold : '-'}</span>
      </div>
    </Box>
  );
};

export default SliderGroup;
