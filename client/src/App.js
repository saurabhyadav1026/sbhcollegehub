/* import './App.css';

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
 */


import React, { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList.js";

const API_URL=process.env.API_URL ; 

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async (user) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    fetchUsers();
  };

  const updateUser = async (id, user) => {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    fetchUsers();
    setEditingUser(null);
  };

  const deleteUser = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    fetchUsers();
  };

  return (
    <div className="container">
      <h1>User Management</h1>
      <UserForm addUser={addUser} updateUser={updateUser} editingUser={editingUser} />
      <UserList users={users} deleteUser={deleteUser} setEditingUser={setEditingUser} />
    </div>
  );
}

export default App;
