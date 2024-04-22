"use client"
import React,{useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
type Props = {}
import Routines from '@/components/Routines'
import Exercises from '@/components/Exercises'
import { useSidebarStore } from '@/utils/zustand/sidebar.store'
import { useAuthStore } from '@/utils/zustand/auth.store'
import {useRouter} from 'next/navigation'
import Meals from '@/components/Meals'
import Foods from '@/components/Foods'
import Calendar from '@/components/Calendar'
const Dashboard = ({children}:any) => {
  let sidebar=useSidebarStore()
  let auth=useAuthStore();
  const router=useRouter()
  
  //console.log(auth.username)
 useEffect(()=>{
  
 })
 if(auth.username=="guest"){  
  router.push('/login')
  return (
    <div className="flex flex-col items-center bg-black ">
          <Image className="" src={'/ytloading.gif'} alt='loading' height={200} width={300} unoptimized />
          <p className="text-center font-semibold text-white">Logged out. Redirecting to Login...</p>
        </div>
  )
 
}
   
  else return (
    <div className="flex min-h-screen flex-col justify-center p-24  w-full bg-black text-white">
     
      <div>
          <p className='text-center'>{`Welcomee ${auth.username}. This is your dashboard`}!</p>
       <p className="p-4">{sidebar.side}</p>
       {sidebar.side=="Routines"?

       <Routines id={auth.id}  username={auth.username}/>
       :sidebar.side=="Exercises"?
       <Exercises />
       : sidebar.side=="Food"?
        <Foods userid={auth.id} />:
        sidebar.side=="Meals"?
        <Meals userid={auth.id} username={auth.username}/> :
        sidebar.side=="Calendar"?
        <Calendar  />
        :
       <></>
       }
      </div>
    </div>
  )
}

export default Dashboard