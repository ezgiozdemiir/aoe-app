import { createContext, useEffect, useState } from 'react';

import aoe from './age-of-empires-units.json';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(aoe.units);
  }, []);

  const values = { data };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataContext;
