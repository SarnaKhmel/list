import "./App.css";
import users from "./users.json";
import UsersList from "./components/UsersList/UsersList";
const App = () => {
  // console.log(users);
  return (
    <div className="App">
      <UsersList customers={users} />
    </div>
  );
};

export default App;
