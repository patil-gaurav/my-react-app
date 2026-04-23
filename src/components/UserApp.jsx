import { use, useEffect, useState } from "react";
import { fetchUsers, createUser, deleteUser } from "../api/userApi";
import UserForm from "./UserForm";
import Loader from "./Loader";
import UserList from "./UserList";

function UserApp() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get API
  useEffect(() => {
    async function loadUsers() {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  // Post API
  async function handleAddUser(name) {
    try {
      setLoading(true);
      const newUser = await createUser({ name });
      setUsers((prevUsers) => [...prevUsers, newUser]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Delete API
  async function handleDeleteUser(userId) {
    try {
      setLoading(true);
      await deleteUser(userId);
      setUsers((prevUsers) => prevUsers.filter(user => user.id !== userId));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>User Management</h2>

      {error && <p className="error">{error}</p>}
      {loading && <Loader />}

      <UserForm onAdd={handleAddUser} />
      {!loading && !error && <UserList users={users} onDelete={handleDeleteUser} />}
    </div>
  )
}

export default UserApp;