import UserList from "./components/userList";
import "./App.css";

export default function App() {
  return (
    <div style={{padding: "20px"}}>
      <h1>Simple CRUD App</h1>
      <UserList />
    </div>
  );
}
