import { useUser } from "../hooks/useUser";
import { useState } from "react";

export default function UserList() {
  const { users, add, remove} = useUser()
  const [searchTerm, setSearchTerm]  = useState("")
  const [searchResults, setSearchResults ] = useState([]);
  const [newName, setNewName] = useState("");


  function handleAdd(){
    if (newName.trim() === "")return;
    add(newName);
    setNewName("");
  }

  function handleSearch(){
    const results = users.filter(u =>
            u.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }


  return (
    <div>
      <h2>User List</h2>
      <input 
      type="text" placeholder="Enter name" value={newName}
           onChange={e => setNewName(e.target.value)}
      />
      <button onClick={handleAdd}>Add User</button>


      <h3>search results</h3>
      <input type="text" placeholder="search User" value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{marginLeft: "10px"}} 
        />
        <button onClick={handleSearch}>Search User</button>
      <ul>
        {searchResults.length > 0 ? (
          searchResults.map(user => (
            <li key={user.id}>
              {user.name}
              <button onClick={() => remove(user.id)}>Delete</button>
            </li>
          ))
        ) : (
          <li>No matching user found</li>
        )}
      </ul>

       
       <h3>all users</h3>
      <ul>
        {users.map(user => (<li key={user.id}> {user.name}
            <button onClick={() => remove(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
