"use client"
import React,{useState,useEffect} from 'react'

type Props = {}

const Users = (props: Props) => {
    const [users, setUsers]:any = useState([]);
    //const uses=fetchData();
    const [emailResponse,setEmailResponse]:any=useState({})
 const fetchData = async () => {
        try {
            const response:any = await fetch('/api/users');
            if (response.ok) {
              const users:any = await response.json()
              //const object=parseJSONString(data)
              //setMessage(map['dog']);
              setUsers(users);
              return users;
            } else {
            }
          } catch (error) {
            console.log(error)
          }
          
      };
    useEffect(() => {
     
      
  
      fetchData();
    }, [users]);
    /*const testEmail = async () => {
        try {
            const response = await fetch('/api/send');
            if (response.ok) {
              const { data, error } = await response.json()
              //const object=parseJSONString(data)
              setEmailResponse(data);
              console.log(data)
            } else {
            }
          } catch (error) {
           
          }
          
      };*/
    return (
      <div>
        <p>Below i am trying to render a messsage response from my users/route.ts file</p>
        
        <div>
        {users? users.map((user:any)=>
         (
            <p key={user.id}>{user.username}</p>
          )
        )
      :<></>}
         </div>
       
        
        {/*emailResponse?
        <p>{emailResponse.toString()} </p>: <p>No response from resen email test</p>
      */}
       {/* <button onClick={()=>testEmail()}>Test Email</button>}*/}
        
      </div>
    );
  }
export default Users