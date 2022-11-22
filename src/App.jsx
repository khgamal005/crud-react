import { useState } from "react";
import Container from "./layout/Container";
import UserList from "./components/user/UserList";
import Button from "./components/UI/Button";
import AddUser from "./components/user/form/AddUser";

const App = () => {
  const [persons, setPerson] = useState([
    { id: 1, name: "John do", phone: "01010111", city: "taxes" },
    { id: 2, name: "kareem nour", phone: "01010111", city: "giza" },
  ]);
  const [form, setForm] = useState(false)


  const deleteUser = (id) => {
    setPerson((prev) => prev.filter((el) => el.id !== id));
  };

  const userHandler = user => {
    setPerson(prevUsers => {
      const updateduser = [...prevUsers];
      updateduser.push({...persons,name:user.userName ,phone : user.phone , city:user.city, id: Math.random().toString()});
      return updateduser;
    });
  };
const showForm=()=>{
setForm(true)
}
const closeForm=()=>{
  setForm(false)
  }
  return (
    <Container>
          {/* <Button onClick={showForm} className='add'>AddUser</Button> */}
      <UserList persons={persons} deleteUser={deleteUser} />
     { <AddUser userHandler={userHandler} closeForm ={closeForm}/>}
    </Container>
  );
};

export default App;


