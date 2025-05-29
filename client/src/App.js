import './App.css';

import React ,{useEffect,useState} from 'react';
import axios from 'axios';



function App() {

  const [users,setUsers]=useState([]);

  useEffect(()=>{
axios.get('/api/user')
.then(res=>setUsers(res.data))
.catch(err=>console.log(err));

  },[]);
  return (
    <>

<h1>User List</h1>
{
  users.map((u,index)=>(
    <p key={index}>{u.name}</p>
  ))
}
  </>  
  );
}

export default App;
