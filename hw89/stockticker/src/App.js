import HomePage from './homePage'
import React, { useState } from 'react';
import './App.css';
import './company.css';
import $ from 'jquery';
function App() {
  const [stock, setStock] = useState('');
  const list = $('.company');
  const handleValueChange = e => {
    setStock(e);
  }
  const getDropdown = () => {
    list.show();
  }
  const getCompanyInfo = () => {

  }
  return (
    <div >
      <HomePage handleValueChange={handleValueChange} stock={stock} getDropdown={getDropdown} getCompanyInfo={getCompanyInfo} />
    </div>
  );
}

export default App;
