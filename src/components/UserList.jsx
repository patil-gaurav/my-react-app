function UserList({ users, onDelete }) {
  return (
    <div>
      <h3>User List</h3>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList;