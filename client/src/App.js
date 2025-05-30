import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';



function App() {

  const [users, setUsers] = useState([]);
console.log("sbh in App.js of frontend");
  useEffect(() => {
    console.log("sbh in useEffect");
    axios.get('https://sbhcollegehub.onrender.com/api/users')
      .then(res => {setUsers(res.data)
                   console.log("check your data by sbh : "+ res.data);
                   })
      .catch(err => console.error("sbh yrr use effect mai hi saari gadbad hai "+err));

  }, []);
  return (
    <div>

        <h1>User List</h1>
        {
          users.length<0:console.log("sbh yrr data to mila nhi kuch"):console.log("data mil gya hai bhai");
            users.length > 0 ? (users.map((u, index) =><p key={index}>{u.name}</p>))
            : (<p> Loading Users....</p>)
            
        }
      </div>
  );}
export default App;
