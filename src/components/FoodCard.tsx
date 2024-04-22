"use client"
import axios from 'axios'
import React,{useEffect,useState} from 'react'
import Image from 'next/image'
type Props = {}

const FoodCard = ({foodid,description,cost, image,fat, protein, calories,carbs,ingredients}:{foodid:number,description:string,cost:number,image:string,fat:number, protein:number,carbs:number,calories:number,ingredients:string}) => {
    const [error, setError]:any =useState('')
   
   
  return (
    <div className="flex flex-col ">
        {/*<Image src={image} alt='foodimage' width={300} height={200} />*/}
        <p className="text-white">{description}</p>
    </div>
  )
}

export default FoodCard