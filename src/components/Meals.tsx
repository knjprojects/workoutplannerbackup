"use client"
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import MealsCard from './MealsCard'
import DropChange from './DropChange'
type Props = {
    userid:number,
    username:string
}

const Meals = ({userid,username}:{userid:number, username:string}) => {
   
    const [error, setError]:any=useState('')
    const [meals,setMeals]:any=useState(null)
    const fetchMeals=async(userid:number)=>{
        try {
            const response:any = await axios.post('/api/meals', {
             userid,username
            });
        
          const resData:any = await response.data
          console.log('getting response in frontend :' + JSON.stringify(resData))
          
      
          if (response.status === 200) {
             // auth.changeUsername(JSON.stringify(resData.username))
              //router.push('/dashboard')
              setMeals(resData)
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
        fetchMeals(userid)
    },[])
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row">
        <div className="flex flex-1">
         
         {} <p>Fetching Meals for {username}</p>
          {meals?
            <div className="flex flex-row gap-3">
            {meals.map((meal:any)=>(
              <MealsCard key={meal.id} user_id={userid} meal_id={meal.id} food_id={meal.food_id} />
            ))}
          </div>
            :<></>
          }
        </div>
        <div className="flex flex-col flex-2">
          <DropChange type={'meals'} />
        </div>
      </div>
  
    </div>
  )
}

export default Meals