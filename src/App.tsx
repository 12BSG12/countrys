import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Main } from './components/Main/Main';
import { CountryInfo } from './pages/CountryInfo';
import { NotFound } from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="country_info/:name" element={<CountryInfo/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes> 
  );
};

export default App;
