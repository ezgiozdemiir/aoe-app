import React from 'react';
import { Slider as S } from '@mui/material';

const Slider = (props) => {
  const { switchOn, name, switchValue, onSetSwitchValue } = props;

  const handleSwitchValue = (e) => {
    onSetSwitchValue({ ...switchValue, [name]: e.target.value });
  };

  return (
    <S
      size='small'
      min={0}
      max={200}
      value={switchValue[name]}
      disabled={switchOn[name] ? true : false}
      onChange={handleSwitchValue}
    />
  );
};

export default Slider;
