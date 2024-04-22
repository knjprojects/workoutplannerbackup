"use client"
import axios from 'axios';
import FormDropdown from './FormDrop';
import { Skeleton } from '@mui/material';
  import {useRouter} from 'next/navigation'
  import { useAuthStore } from '@/utils/zustand/auth.store'
  import React,{useEffect,useState} from 'react'
import { useSidebarStore } from '@/utils/zustand/sidebar.store';
type Props = {}

const DropChange = ({type}:{type:string}) => {
    const [open,setOpen]:any=useState(false)
    const [error, setError]:any=useState('')
    let auth=useAuthStore()
    const router=useRouter()
    const [showSkeleton, setShowSkeleton] = useState(true);
    const[loading,setLoading]:any=useState(false)
    /*const [name, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [carbs,setCarbs]:any=useState(null)
    const [protein,setProtein]*/

  
  const [selectedDate, setSelectedDate]:any = useState(null);
  const [isVisible, setIsVisible]:any = useState(false);
  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
  };

    const handleSubmit = async (e:any) => {
      e.preventDefault();
     if(type=='exercises'){}
      const name=e.target.name.value
      const description=e.target.description.value
      
      
  try {
        const response:any = await axios.post(`/api/create/${type}`, {
          name,  description
        });
    
      const resData:any = await response.data
      console.log('getting response in frontend :' + JSON.stringify(resData))
      
  
      if (response.status === 200) {
        setLoading(false)
          //auth.changeUsername(JSON.stringify(resData.username))
          //auth.changeId(JSON.stringify(resData.id))
          //router.push('/dashboard')
        }
          else{
            setLoading(false)
            setError(`error creating ${type} object`)
          }
    }
    catch (error) {
      console.log(error)
      
      }
    
      
      
    }//ednsubmit
  useEffect(()=>{

  })
  return (
      <div>
         <button onClick={openModal}>Create {type}</button>
        {isVisible?
        <div>
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
         
        
         <div className="mb-6">
           <label
             htmlFor="email"
             className="text-white block mb-2 text-sm font-medium"
           >
             name
           </label>
           {showSkeleton?   <Skeleton  variant="text" width={500}  height={40} /> :
           <input
             name="name"
             type="text"
             id="name"
             required
             className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
             placeholder="name"
           />
}
         </div>
         <div className="mb-6">
           <label
             htmlFor="subject"
             className="text-white block text-sm mb-2 font-medium"
           >
             Description
           </label>
           {showSkeleton?   <Skeleton variant="text" width={500}  height={40} /> : <input
             name="description"
             type="text"
             id="description"
             required
             className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
             placeholder="password1234"
           />
           }
           
           
         </div>
          <button onClick={()=>setLoading(true)}
           type="submit"
           className="bg-blue-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
         >
           Create
         </button> 
         
         {error?<p className="text-center text-red-500 ">{error}</p> 
         : <></>
         }
         
       </form>
        </div> :<></>
        }
      </div>
   
  )
}

export default DropChange
/**/