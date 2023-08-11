import logo from './logo.svg';
import React, {useState} from 'react';
// import './App.css';

function App() {
  const [email, setEmail ] = useState(''); // here, use state hold the intail State


  const [name, setName] = useState('');


  function handleChange (e) { // this hold the next State
    setEmail(e.target.value);
  }

  function handleChangeName (e) {
    setName(e.target.value);
  }

  return (
    <div className="App" style={{ padding: 10 }}>
      <input 
       value={email}
       onChange={handleChange}
       />

       <br></br>

       <input 
       value={name}
       onChange={handleChangeName}
       />

       <p>Email: {email}</p>
       <p>Name: {name}</p>
    </div>
  );
}

export default App;
