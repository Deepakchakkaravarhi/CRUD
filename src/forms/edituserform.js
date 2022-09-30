import { useEffect, useState } from "react"

const EditUserForm =(props)=>{
 const [user,setuser]= useState(props.currentuser);
useEffect(()=>{
    setuser(props.currentuser)
},[props])
 const handleInputChange = (event)=>{
    const {name,value} = event.target

   setuser({...user,[name]:value}) 
 }
 return(
    <form onSubmit={
        event =>{
            event.preventDefault();
            if(!user.name||!user.username) return;
            props.updateuser(user.id,user);
            
        }
    } >
        <lable>Name</lable>
        <input type="text" onChange={handleInputChange} name="name" value={user.name} />
        <lable>UserName</lable>
        <input type="text"onChange={handleInputChange} name="username" value={user.username} />
        <button>Update user</button>
        <button className="button muted-button" onClick={()=>
             props.setediting(false)
        }>Cancle</button>
    </form>
 )
}

export default EditUserForm;