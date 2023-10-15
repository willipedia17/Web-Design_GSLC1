import logo from './logo.svg';
import './App.css';
import './tailwind.css';
import './App.css';
// import { alignPropType } from 'react-bootstrap/esm/types';
import React, { useState } from 'react';

function App() {

  const [radioValue, setRadioValue] = useState(''); 
  const [checkboxChecked, setCheckboxChecked] = useState(false); 
  const [username, setUsername] = useState(''); 
  const [studentId, setStudentId] = useState('');

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  const handleClick = () => {
    alert("GSLC Forum has been submitted!");
    setUsername('');
    setStudentId('');
    setRadioValue('');
    setCheckboxChecked(false);
  };

  return (
    <div className="App">
      <div className="background"> 
        <div className="paper">
          <p className="title">
            GSLC Session 5 Forum
          </p>
          <br/>
          <input className="modified-input" placeholder="Username" type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
          />

          <br/>
          <input className="modified-input" placeholder="Student Id" type="number" 
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)} 
          />

          <label className="select-label">
            Select subject: 
          </label>
          <label class="inline-label">
            <input className="radio" type="radio" name="radio-group" value="Mobile Multimedia Solution" 
            checked={radioValue === "Mobile Multimedia Solution"}
            onChange={handleRadioChange}
            />
            Mobile Multimedia Solution
          </label>
          <label class="inline-label">
            <input className="radio" type="radio" name="radio-group" value="Web Design"
            checked={radioValue === "Web Design"}
            onChange={handleRadioChange}
            />
            Web Design
          </label>
          <label class="confirm">
            <input type="checkbox" className="checkbox" 
            checked={checkboxChecked}
            onChange={handleCheckboxChange}
            />
            The data entered is not represented by others
          </label>
          <br/>
          
          <button className="subutton" onClick={handleClick}> 
            submit
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
