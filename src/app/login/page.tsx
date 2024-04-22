"use client"
import Image from 'next/image'
import axios from 'axios'
import React,{useState} from 'react'
import {useRouter} from 'next/navigation'
import { useAuthStore } from '@/utils/zustand/auth.store'
import Link from 'next/link'
type Props = {}
import { Skeleton } from '@mui/material';
const Login = (props: Props) => {
  let auth=useAuthStore()
    const router=useRouter()
    const [showSkeleton, setShowSkeleton] = useState(true);
    const[loading,setLoading]:any=useState(false)
   const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  setTimeout(() => {
    setShowSkeleton(false);
  }, 5000); 
   
    const [loggedUser,setLoggedUser]:any=useState(null)
    
    const [error, setError]:any=useState(null)
  
  const handleSubmit = async (e:any) => {
    e.preventDefault();
   
    const username=e.target.username.value
    const password=e.target.password.value
    
    if(auth.log){
try {
      const response:any = await axios.post('/api/auth/login', {
        username, password
      });
  
    const resData:any = await response.data
    console.log('getting response in frontend :' + JSON.stringify(resData))
    

    if (response.status === 200 && resData.username) {
      setLoading(false)
        auth.changeUsername(JSON.stringify(resData.username))
        auth.changeId(JSON.stringify(resData.id))
        router.push('/dashboard')}
        else{
          setLoading(false)
          setError('Incorrect username or password. Check your credentials and try again')
        }
  }
  catch (error) {
    console.log(error)
    
    }
  }//ednif loggin in
    else{//signup
      try {
        const response:any = await axios.post('/api/auth/signup', {
          username, password
        });
    
      const resData:any = await response.data
      console.log('getting sign up response in frontend :' + JSON.stringify(resData))
      
  
      if (response.status === 200 && resData.username) {
        setLoading(false)
        
          auth.changeUsername(JSON.stringify(resData.username))
          auth.changeId(JSON.stringify(resData.id))
          router.push('/dashboard')
      
       
      }
      else{
        setLoading(false)
        setError('Sign Up failed. This user may already exist')
      }
      
    }
    catch (error) {
      console.log(error)
     
    }
  }//endif signup
    
  }//ednsubmit
  if(auth.username=='guest')
    return (
      <div className="p-24 h-screen flex flex-col bg-black items-center">
        <div className='fixed top-0 right-0 flex flex-row m-4'>
          <button className='justify-right text-right' onClick={()=>auth.changeLog()}>{auth.log? 'Sign Up' :'Log In'}</button>
        </div>
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
         
        
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your username
                </label>
                {showSkeleton?   <Skeleton  variant="text" width={500}  height={40} /> :
                <input
                  name="username"
                  type="text"
                  id="username"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="mynameisthis"
                />
    }
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Password
                </label>
                {showSkeleton?   <Skeleton variant="text" width={500}  height={40} /> : <input
                  name="password"
                  type="text"
                  id="password"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="password1234"
                />
                }
              
                
              </div>
              {auth.log?  <button onClick={()=>setLoading(true)}
                type="submit"
                className="bg-blue-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Login
              </button> : <button onClick={()=>setLoading(true)}
                type="submit"
                className="bg-blue-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                SignUp
              </button>
              }
              {error?<p className="text-center text-red-500 ">{error}</p> 
              : <></>
              }
              
            </form>
          {}
      {auth.username!="guest"?
      <p className="text-center">Logged in with {JSON.stringify(loggedUser.username)}</p> : 
     <></>
      
      }
        {loading?
        <div className="flex flex-col items-center">
          <Image className="" src={'/ytloading.gif'} alt='loading' height={200} width={300} unoptimized />
          <p className="text-center font-semibold text-white">Logging you in...</p>
        </div>
                  : <p></p> 
            }
      </div>
    )
    else {
      router.push('/dashboard')
      return (
        <div className="bg-black flex flex-col items-center h-screen">
          <p className="text-center text-white">Loggin in {auth.username}</p>
          <Image className="" src={'/ytloading.gif'} alt='loading' height={200} width={300} unoptimized />
        </div>
      )
    }
    /*return (
      <div className='bg-slate-100 w-full h-screen flex flex-col items-center'>
        <div className='p-24'><h2 className='text-center'>You are already logged in</h2>
        <div className="flex flex-row gap-2">
          
            <button onClick={()=>auth.reset()}>Logout</button>
            <button onClick={()=>router.push('/dashboard')}>Dashboard</button>
        </div></div>
        
      </div>
    )*/
}

export default Login