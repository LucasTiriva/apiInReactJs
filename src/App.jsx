import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())

      .then((users) => setUsers(users));
  }, []);

  return users.map((user) => (
    <div className="users">
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  ));
}

export default App;
