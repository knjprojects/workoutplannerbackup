"use client"
import axios from 'axios'
import React,{useEffect,useState} from 'react'
import Image from 'next/image'
import FoodCard from './FoodCard'
type Props = {

}

const MealsCard = ({meal_id,food_id,user_id}:{meal_id:number,food_id:number,user_id:number}) => {
  const [error, setError]:any=useState('')
  const [removed,setRemoved]:any=useState(null)
  const [meals,setMeals]:any=useState(null)

   const fetchFoodById=async(foodid:number)=>{
        try {
            const response:any = await axios.post('/api/meals', {
             user_id
            });
        
          const resData:any = await response.data
          console.log('getting response in frontend :' + JSON.stringify(resData))
          
      
          if (response.status === 200) {
             // auth.changeUsername(JSON.stringify(resData.username))
              //router.push('/dashboard')
              setMeals(resData)
            }
              else{
                setError('Error loading meals for user')
              }
        }
        catch (error) {
          console.log(error)
          
          }
        }
const removeMeal=async(mealid:number)=>{
  try {
    const response:any = await axios.post('/meals/remove', {
     user_id,meal_id
    });

  const resData:any = await response.data
  console.log('getting response in frontend :' + JSON.stringify(resData))
  

  if (response.status === 200) {
     // auth.changeUsername(JSON.stringify(resData.username))
      //router.push('/dashboard')
      setRemoved(resData)
    }
      else{
        setError('Incorrect username or password. Check your credentials and try again')
      }
}
catch (error) {
  console.log(error)
  
  }
}
  
  return (
    <div className='flex flex-col'> {
      meals? meals.map((meal:any)=>(
        <div key={meal.id} > 
        <p className="text-white">{meal.id}</p>
        
       {/*} <FoodCard  foodid={meal.food_item.id} description={meal.food_item.description} cost={meal.food_item.cost} image={meal.food_item.image} ingredients={meal.food_item.ingredients} carbs={meal.food_item.carbs} fat={meal.food_item.fat} protein={meal.food_item.protein} calories={meal.food_item.calories} />*/}
        <button className="text-white" onClick={()=>removeMeal(meal_id)}>Remove</button>
        </div>
     
      ) )
      :<></>
}
    </div>
  )
}

export default MealsCard