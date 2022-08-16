import React, { useState } from 'react';

import ButtonGroup from '../../components/Button/ButtonGroup';
import SwitchGroup from '../../components/Switch/SwitchGroup';
import SliderGroup from '../../components/Slider/SliderGroup';

import Table from '../../components/Table/TableUnits';

import './Units.scss';

const Units = () => {
  const [age, setAge] = useState('');

  const [switchOn, setSwitchOn] = useState({
    wood: true,
    food: true,
    gold: true,
  });

  const [switchValue, setSwitchValue] = useState({
    wood: 0,
    food: 0,
    gold: 0,
  });

  return (
    <div className='units-container'>
      <div className='filter'>
        <div className='filter__ages'>
          <span>AGES</span>
          <ButtonGroup age={age} onSetAge={setAge} />
        </div>
        <div className='filter__costs'>
          <span>COSTS</span>
          <div className='costs-group'>
            <SwitchGroup switchOn={switchOn} onSetSwitchOn={setSwitchOn} />
            <SliderGroup
              switchOn={switchOn}
              switchValue={switchValue}
              onSetSwitchValue={setSwitchValue}
            />
          </div>
        </div>
      </div>
      <div className='units-table'>
        <Table switchOn={switchOn} switchValue={switchValue} age={age} />
      </div>
    </div>
  );
};

export default Units;
