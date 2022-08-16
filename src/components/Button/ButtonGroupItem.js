import { Button as B } from '@mui/material';

const Button = (props) => {
  const { text, age, onSetAge } = props;

  const handleSetAge = (ageText) => {
    if (ageText === 'All') {
      onSetAge('');
    } else {
      onSetAge(ageText);
    }
  };

  const handleClassName = () => {
    if (age === text) {
      return 'active-button';
    } else if (age === '' && text === 'All') {
      return 'active-button';
    } else {
      return '';
    }
  };

  return (
    <B className={handleClassName()} onClick={() => handleSetAge(text)}>
      {text}
    </B>
  );
};

export default Button;
