import { useUser } from "../hooks/useUser";

export default function UserList() {
  const { users, add, remove } = useUser();

  return (
    <div>
      <h2>User List</h2>

      <button onClick={() => add("Charlie")}>Add User</button>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => remove(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
