import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useContext } from 'react';
import DataContext from '../../store/Contex';

import Icon from '../../components/Icons/Icon';
import Table from '../../components/Table/TableUnitDetails';

import './UnitDetails.scss';

const UnitDetails = () => {
  const { data } = useContext(DataContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [id, setId] = useState(Number(searchParams.get('id')) || 1);

  const handleSearch = (id) => {
    if (id !== 0 && id !== data.length + 1) {
      setId(id);
      setSearchParams(`id=${id}`);
    }
  };

  return (
    <div className='unit-details-container'>
      <Table data={data} />
      <div className='unit-details-buttons'>
        <button
          className={id <= 1 || id >= data.length + 1 ? 'disabled' : ''}
          onClick={() => handleSearch(id - 1)}
        >
          <Icon name='BackArrow' />
        </button>
        <button
          className={id <= 0 || id >= data.length ? 'disabled' : ''}
          onClick={() => handleSearch(id + 1)}
        >
          <Icon name='ForwardArrow' />
        </button>
      </div>
    </div>
  );
};

export default UnitDetails;
