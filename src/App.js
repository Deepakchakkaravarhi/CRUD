import { useState } from "react";
import AddUserForm from "./forms/AddUserform";
import UserTable from "./tables/UserTable";
import EditUserForm from "./forms/edituserform";

function App(){

  const usersData=[
    {id:1,name:'yeswanth',username:'yesh'},
    {id:1,name:'ram',username:'ramji'},
    {id:1,name:'salai',username:'sala'},

  ];

 const addUser = (user)=>{
  user.id=users.length + 1;
  setUsers([...users,user])

 }
 const deleteUser =(id)=>{
  setUsers(users.filter((user)=>user.id!==id))
  setediting(false);
 }


   const [users,setUsers]=useState(usersData);
   const [editing,setediting]= useState(false);
   
   const initialFormstate={id:null,name:'',username:''}

   const [currentuser,setcurrentuser] = useState(initialFormstate);
   
   const editRow=(user)=>{
    setediting(true);
    setcurrentuser({id:user.id,name:user.name,username:user.username});
   }

   const updateuser=(id,updateuser)=>{
    setediting(false);
    setUsers(users.map((user)=>(user.id===id?updateuser:user)))

   }
   return(
    <div className="Container">
      <h1>Crud With Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing?(<div>
            <h2>Edit User</h2>
            <EditUserForm 
            setediting={setediting}
            currentuser={currentuser} 
            updateuser={updateuser}/>
          </div>):(<div>
            <h2>Add User</h2>
            <AddUserForm adduser={addUser} /> 
            </div>)
             }
        </div>
        <div className="flex-large">
          <h2>View Users</h2> 
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;