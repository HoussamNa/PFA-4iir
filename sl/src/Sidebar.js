import React, { useState } from 'react';
import './static/Sidebar.css';
function Sidebar(props) {
  

  
  const { onChoiceSelect } = props;

  function handleChoiceSelect(choice) {
    onChoiceSelect(choice);
  }
  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <nav>
        <ul>
        <li onClick={() => handleChoiceSelect("option1")}>Option 1</li>
        <li onClick={() => handleChoiceSelect("option2")}>Option 2</li>
        <li onClick={() => handleChoiceSelect("option3")}>Option 3</li>
        <li onClick={() => handleChoiceSelect("option4")}>Option 4</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
