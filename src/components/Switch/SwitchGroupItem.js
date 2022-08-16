import React from 'react';
import { Switch as S } from '@mui/material';

const Switch = (props) => {
  const { switchOn, onSetSwitchOn, name } = props;

  const handleSwitch = (e) => {
    onSetSwitchOn({ ...switchOn, [name]: !e.target.checked });
  };

  return <S size='small' value={switchOn[name]} onChange={handleSwitch} />;
};

export default Switch;
