import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainPage';

function SecondPage({ currentChoice, onChoiceSelect }) {
  return (
    <div>
      <Sidebar onChoiceSelect={onChoiceSelect} />
      <MainContent currentChoice={currentChoice} />
    </div>
  );
}

export default SecondPage;
