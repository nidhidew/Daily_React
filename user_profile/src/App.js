import React, {useState} from "react";
import AddUser from "./Components/Users/AddUser";
import UserLists from "./Components/Users/UserLists";
function App() {
  const [userList,setUserList] = useState([]);
  const addUserHandler = (uName,uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserLists users={userList}/>
    </div>
  );
}

export default App;
