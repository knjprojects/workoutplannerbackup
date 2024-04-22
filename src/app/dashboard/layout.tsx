"use client"
import React,{useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSidebarStore } from '@/utils/zustand/sidebar.store'
import { AuthState, useAuthStore } from '@/utils/zustand/auth.store'
import Drop from "@/components/Drop"
import DropChange from '@/components/DropChange'
type Props = {}

const DashLay = ({children}:any) => {
    let auth=useAuthStore()
let sidebar=useSidebarStore()
  const Links=[
    {'name':'Exercises', 'link':'/exercises'},
    {'name':'Routines', 'link':'/routines'},
    {'name':'Calendar', 'link':'/calendar'},
    {'name':'Food', 'link':'/food'},
    {'name':'Meals', 'link':'/meals'}
  ]


  return (
    <div className="bg-black">
      <div className="flex min-h-screen flex-col justify-center p-24 w-full">
        <Link className='fixed top-0 left-0 m-4 hover:scale-105 transition animate-pulse' href='/'> <Image src={'/workout.png'} alt='logo' height={80} width={100}  /></Link>

        <div className="fixed top-0 right-0 m-4 flex flex-row">
             
            <Drop user_id={auth.id} />
        </div>
       
      <div className="flex flex-row items-center bg-black text-white">
        <div className="w-300 h-200 justify-left bg-green-300 rounded-sm">
          <div className="flex flex-col m-3 gap-4">
            {
              Links.map((link:any)=>(
                //href={link.link}
                <button onClick={()=>sidebar.changeSide(link.name)} className={` ${sidebar.side === link.name ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}
                rounded-sm hover:scale-110 transition duration-300 ease-in-out
                ${sidebar.side === link.name ? 'hover:bg-red-500' : ''}
                ${sidebar.side === link.name ? 'active:bg-purple-300' : ''} rounded-sm hover:scale-110 transition duration-300 ease-in-out bg-blue-300 hover:bg-red-500 active:bg-purple-500`} key={link.link} >
                  <p className='font-bold text-center'>{link.name}</p>
                </button>
              ))
            }
          </div>
        </div>
        <div>
          {children}
        {/*<p className='text-center'>{`This is the dashboard`}!</p>*/}
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default DashLay