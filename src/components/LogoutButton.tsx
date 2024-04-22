"use client"
import React from 'react'
import { useRouter } from 'next/router'
import {LogOut} from "lucide-react"
import { useAuthStore } from '@/utils/zustand/auth.store'
type Props = {}

const LogoutButton = (props: Props) => {
  let auth=useAuthStore()
  const router=useRouter()
  return (
    <button className="mr-2 h-4 w-4" onClick={()=>{
      auth.reset() //&& router.push('/login')
      }}> <LogOut  /> {/*replace with span text if necessary */}
    </button>
  )
}

export default LogoutButton