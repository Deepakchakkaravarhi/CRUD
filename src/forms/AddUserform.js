import { useState } from "react";

const AddUserForm = (props)=>{
    const intialformstate ={id:null,name:'',username:''}
   const [user,setuser] = useState(intialformstate);
   const handleInputChange =(event)=>{
   const {name,value} = event.target

   setuser({...user,[name]:value})
   }
    return(
        <form onSubmit={
            event =>{
                event.preventDefault();
                if(!user.name||!user.username) return;
                props.adduser(user);
                setuser(intialformstate);
            }
        } >
            <lable>Name</lable>
            <input type="text" onChange={handleInputChange} name="name" value={user.name} />
            <lable>UserName</lable>
            <input type="text"onChange={handleInputChange} name="username" value={user.username} />
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm;