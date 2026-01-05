import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import SingleProduct from './Pages/SingleProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;