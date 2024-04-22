"use client"
import React,{useState, useEffect} from "react";
import Users from "@/components/Users";
import Image from "next/image";
import Login from "./login/page";
import { useAuthStore } from '@/utils/zustand/auth.store'
import { useRouter } from "next/navigation";
export default function Home() {
  let auth=useAuthStore()
  const router=useRouter()
  const [message, setMessage]:any = useState('');
  
  const fetchData = async () => {
    try {
        const response:any = await fetch('/api/init');
        if (response.ok) {
          const message:any = await response.text()
          //const object=parseJSONString(data)
          //setMessage(map['dog']);
          setMessage(message);
        } else {
        }
      } catch (error) {
        console.log(error)
      }
      
  };
  useEffect(()=>{
   
    fetchData();
    
    if(auth.username=='guest')
        router.push('/login')
      else {
        
         router.push('/dashboard')
      }
  },[])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      
      <div className="flex flex-col items-center">
        <Image src={'/ytloading.gif'} alt='loading' height={200} width={300} unoptimized />
        {
          message? <div> <p className="text-white text-center">Initialized database</p></div>
          : <p className="text-white text-center">Loading database</p>
          
 
        }
        
      </div>
    </main>
  );
}
