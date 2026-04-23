import { useState } from "react";

function UserForm( { onAdd }) {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      return;
    }

    onAdd(name);
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button type="submit">Add User</button>
    </form>
  )
}

export default UserForm;