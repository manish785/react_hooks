// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

function App(props) {
  const [userId, setUserId] = useState('1');
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log('Data', data);
        setData(data);
      });
  }, [userId]);

  return (
    <div className="App" style={{ paddingLeft: 10 }}>
      <h1>App</h1>
      <button onClick={() => setUserId('2')}>Change user id to 2</button>
      {data.map((post) => (
        <div key={post.id}> {/* Add a unique key */}
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;





// function App() {
//   const [email, setEmail ] = useState(''); // here, use state hold the intail State


//   const [name, setName] = useState('');


//   function handleChange (e) { // this hold the next State
//     setEmail(e.target.value);
//   }

//   function handleChangeName (e) {
//     setName(e.target.value);
//   }

//   return (
//     <div className="App" style={{ padding: 10 }}>
//       <input 
//        value={email}
//        onChange={handleChange}
//        />

//        <br></br>

//        <input 
//        value={name}
//        onChange={handleChangeName}
//        />

//        <p>Email: {email}</p>
//        <p>Name: {name}</p>
//     </div>
//   );
// }
