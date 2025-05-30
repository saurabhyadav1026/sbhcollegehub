import React, { useState, useEffect } from "react";

function UserForm({ addUser, updateUser, editingUser }) {
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      updateUser(editingUser._id, formData);
    } else {
      addUser(formData);
    }
    setFormData({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        required
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        required
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button type="submit">{editingUser ? "Update" : "Add"} User</button>
    </form>
  );
}

export default UserForm;
