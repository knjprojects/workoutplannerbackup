"use client"
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
type Props = {
    id:number,
    username:string
}
import DropChange from './DropChange'
const Exercises = () => {
   
    const [error, setError]:any=useState('')
    const [exercises,setExercises]:any=useState(null)
    const fetchExercises = async () => {
        try {
            const response:any = await fetch('/api/exercises');
            if (response.ok) {
              const exercises:any = await response.json()
              //const object=parseJSONString(data)
              //setMessage(map['dog']);
              setExercises(exercises);
              return exercises;
            } else {
            }
          } catch (error) {
            console.log(error)
          }
    }
    useEffect(()=>{
        fetchExercises()
    },[])
  return (
    
    <div className="flex flex-col w-full">
    <div className="flex flex-row">
      <div className="flex flex-1">
       
      <p>Fetching exercises</p>
        {exercises?
        <div className="flex flex-row gap-3">
        {exercises.map((exercise:any)=>(
          <div key={exercise.id}>  
            <p >{exercise.description}</p></div>
           
        ))}</div>
         :<></>
        }
      </div>
      <div className="flex flex-col flex-2">
        <DropChange type={'exercises'} />
      </div>
    </div>

  </div>
       


    
  )
}

export default Exercises