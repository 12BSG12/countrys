import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Main } from './components/Main/Main';
import { Suspense, lazy } from 'react';
import ThreeDots from './common/Preloader';

const CountryInfo = lazy(() => import('./pages/CountryInfo/CountryInfo'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const App = () => {
  return (
    <Suspense fallback={<ThreeDots />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="country_info/:name" element={<CountryInfo/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes> 
    </Suspense>
  );
};

export default App;
