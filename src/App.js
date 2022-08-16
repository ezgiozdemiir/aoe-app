import { Routes, Route } from 'react-router-dom';

import { DataProvider } from './store/Contex';

import Header from './components/Header/Header';

import { Home, Units, UnitDetails } from './pages';

const App = () => {
  return (
    <DataProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/units' element={<Units />} />
        <Route path='/unit_details' element={<UnitDetails />} />
      </Routes>
    </DataProvider>
  );
};

export default App;
