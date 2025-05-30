import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';



function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://sbhcollegehub.onrender.com/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));

  }, []);
  return (
    <div>

        <h1>User List</h1>
        {
            users.length > 0 ? (users.map((u, index) =><p key={index}>{u.name}</p>))
            : (<p> Loading Users....</p>)
            
        }
      </div>
  );}
export default App;
