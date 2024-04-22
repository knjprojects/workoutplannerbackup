"use client"
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import FoodCard from './FoodCard'
import DropChange from './DropChange'
type Props = {
    id:number,
    username:string
}

const Foods = ({userid}:{userid:number}) => {
   
    const [error, setError]:any=useState('')
    const [foods,setFoods]:any=useState(null)
    const fetchFoods = async () => {
        try {
            const response:any = await fetch('/api/foods');
            if (response.ok) {
              const foods:any = await response.json()
              //const object=parseJSONString(data)
              //setMessage(map['dog']);
              setFoods(foods);
              //return foods;
            } else {
              setError('error loading food information')
            }
          } catch (error) {
            console.log(error)
          }
    }
    useEffect(()=>{
        fetchFoods()
    },[])
  return (
    <div className="flex flex-col w-full">
    <div className="flex flex-row">
      <div className="flex flex-1">
       
      <p>Fetching foods</p>
        {foods?
        <div className="flex flex-row gap-3">
        {foods.map((food:any)=>(
            <FoodCard key={food.id} foodid={food.id} description={food.description} cost={food.cost} image={food.image} ingredients={food.ingredients} carbs={food.carbs} fat={food.fat} protein={food.protein} calories={food.calories} />
        ))}</div>
         :<></>
        }
      </div>
      <div className="flex flex-col flex-2">
        <DropChange type={'foods'} />
      </div>
    </div>

  </div>
        
       
   
  )
}

export default Foods