import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import RandomWeather from './pages/RandomWeather/RandomWeather';
import Location from './pages/Location/Location';
// import Cities from './pages/Cities/Cities';
import Search from './pages/Search/Search';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<RandomWeather />} />
          <Route path="/location" element={<Location />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/cities" element={<Cities />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
