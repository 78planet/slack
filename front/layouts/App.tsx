import React from 'react';
import loadable from '@loadable/component';
import { Routes, Route } from 'react-router-dom';

const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;