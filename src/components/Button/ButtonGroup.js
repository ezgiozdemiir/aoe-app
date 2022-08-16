import { ButtonGroup as BG } from '@mui/material';
import Button from './ButtonGroupItem';

import './ButtonGroup.scss';

const ButtonGroup = (props) => {
  const ages = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Dark' },
    { id: 3, name: 'Feudal' },
    { id: 4, name: 'Castle' },
    { id: 5, name: 'Imperial' },
  ];

  return (
    <BG variant='contained' aria-label='outlined primary button group'>
      {ages.map((age) => (
        <Button {...props} text={age.name} key={age.id} />
      ))}
    </BG>
  );
};

export default ButtonGroup;
