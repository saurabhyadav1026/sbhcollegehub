import React from "react";

function UserList({ users, deleteUser, setEditingUser }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          <strong>{user.name}</strong> ({user.email}){" "}
          <button onClick={() => setEditingUser(user)}>Edit</button>
          <button onClick={() => deleteUser(user._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
