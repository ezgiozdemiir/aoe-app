import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Switch from './SwitchGroupItem';

import './SwitchGroup.scss';

const SwitchGroup = (props) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch {...props} name='wood' />}
        label='Wood'
      />
      <FormControlLabel
        control={<Switch {...props} name='food' />}
        label='Food'
      />
      <FormControlLabel
        control={<Switch {...props} name='gold' />}
        label='Gold'
      />
    </FormGroup>
  );
};

export default SwitchGroup;
