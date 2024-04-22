"use client"
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import RoutineCard from './RoutineCard'
import DropChange from './DropChange'
type Props = {
    id:number,
    username:string
}

const Routines = ({id,username}:{id:number, username:string}) => {
   
    const [error, setError]:any=useState('')
    const [routines,setRoutines]:any=useState(null)
    const fetchRoutines=async(id:number)=>{
        try {
            const response:any = await axios.post('/api/routines', {
             id,username
            });
        
          const resData:any = await response.data
          console.log('getting response in frontend :' + JSON.stringify(resData))
          
      
          if (response.status === 200) {
             // auth.changeUsername(JSON.stringify(resData.username))
              //router.push('/dashboard')
              setRoutines(resData)
            }
              else{
                setError('Incorrect username or password. Check your credentials and try again')
              }
        }
        catch (error) {
          console.log(error)
          
          }
    }
    useEffect(()=>{
        fetchRoutines(id)
    },[])
  return (
    <div className="flex flex-col w-full">
      <p>Fetching routines for {username}</p>
      <div className="flex flex-row">
        <div className="flex flex-1">
        
        
        {routines?
        <div className="flex flex-row gap-3">
        {routines.map((routine:any)=>(
           <RoutineCard key={routine.id} id={routine.id} description={routine.description} />
        ))}</div>
         :<></>
        }
        </div>
        <div className="flex flex-col flex-2">
          <DropChange type={'routines'} />
        </div>
      </div>

    </div>
    
   
       

  
  )
}

export default Routines