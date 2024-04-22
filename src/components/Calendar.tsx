"use client"
import React,{useState,useEffect} from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker'
import axios from 'axios';
import { Calendar as Calindar, dateFnsLocalizer } from 'react-big-calendar'
import {format} from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import { compareAsc } from "date-fns";
import { useAuthStore } from '@/utils/zustand/auth.store';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from './ui/button'
import { 
  DropdownMenu,  
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  //DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,} from '@radix-ui/react-dropdown-menu';
import { Skeleton } from '@mui/material';
//import AwesomeModal from 'react-awesome-modal';
const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
];
dates.sort(compareAsc);
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
type Props = {}

const Calendar = (props: Props) => {
  const times = [
    '00:00', '00:30', '01:00', '01:30', '02:00', '02:30',
    '03:00', '03:30', '04:00', '04:30', '05:00', '05:30',
    '06:00', '06:30', '07:00', '07:30', '08:00', '08:30',
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
    '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'
  ];

  let auth=useAuthStore()
  const user=auth.id
  
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [selectedMeal,setSelectedMeal]:any=useState(null)
  const [time,setTime]:any=useState('allday')
  const [startDate, setStartDate] = useState(new Date(2024, 4, 21));
 const [selectedDate, setSelectedDate]:any = useState(null);
  const [isVisible, setIsVisible]:any = useState(false);
  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
  };
  //console.log(format(new Date(1995, 6, 2),"yyyy-MM-dd"))
  const handleSelectSlot = (slotInfo:any) => {
    setSelectedDate(format(slotInfo.start,"yyyy-MM-dd")); // Update selectedDate state with the clicked date
    console.log('Nothing is being registered when i click on the dates')
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if(!isChecked)
      setTime('allday')
  };
  



  const [routines,setRoutines]:any=useState(null)

  const handleSelectRoutine = (id:any) => {
    const selectedValue = id;
    console.log(`Selected Value: ${selectedValue}`);
    setSelectedRoutine(selectedValue);
  };
  const handleSelectMeal = (id:any) => {
    const selectedValue = id;
    console.log(`Selected Value: ${selectedValue}`);
    setSelectedMeal(selectedValue);
  };
   
  const handleSelectTime = (selectedTime:string) => {
    console.log(`Selected Time: ${selectedTime}`);
    setTime(selectedTime)
  };


    const fetchRoutines=async(id:number,username:string)=>{
        try {
            const response:any = await axios.post('/api/routines', {
             id,username
            });
        
          const resData:any = await response.data
          console.log('getting response in frontend :' + JSON.stringify(resData))
          
      
          if (response.status === 200) {
             
              setRoutines(resData)
            }
              else{
                //setError('Incorrect username or password. Check your credentials and try again')
              }
        }
        catch (error) {
          console.log(error)
          
          }
    }
    const [meals,setMeals]:any=useState(null)
    const fetchMeals=async(userid:number,username:string)=>{
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
                //setError('Incorrect username or password. Check your credentials and try again')
              }
        }
        catch (error) {
          console.log(error)
          
          }
    }
     const [cals,setCals]:any=useState(null)
    const fetchCals=async(userid:number)=>{
        try {
            const response:any = await axios.post('/api/cals', {
             userid
            });
        
          const resData:any = await response.data
          console.log('getting response in frontend :' + JSON.stringify(resData))
          
      
          if (response.status === 200) {
             // auth.changeUsername(JSON.stringify(resData.username))
              //router.push('/dashboard')
              setCals(resData)
            }
              else{
                //setError('Incorrect username or password. Check your credentials and try again')
              }
        }
        catch (error) {
          console.log(error)
          
          }
    }
   const AddToCal=async()=>{
    setSelectedDate(startDate)
    const cal=cals[0].id
    try {
      const response:any = await axios.post('/api/cals', {
       user,selectedDate,time,selectedRoutine,selectedMeal,cal
      });
  
    const resData:any = await response.data
    console.log('getting response in frontend :' + JSON.stringify(resData))
    

    if (response.status === 200) {
       // auth.changeUsername(JSON.stringify(resData.username))
        //router.push('/dashboard')
        setCals(resData)
      }
        else{
          //setError('Incorrect username or password. Check your credentials and try again')
        }
  }
  catch (error) {
    console.log(error)
    
    }
}
   
  
  useEffect(()=>{
    fetchRoutines(auth.id,auth.username)
    fetchMeals(auth.id,auth.username)
    fetchCals(auth.id)
  })




    return (//animate-in zoom-in duration-500
      <div className=" bg-slate-400">
        {selectedDate ? <div>    <p className="text-white">
          Selected Date: {selectedDate} </p></div> :<></>}
    
    <Calindar
      onSelectSlot={handleSelectSlot}
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
    <button onClick={openModal}>Create workout day</button>
    {/*<AwesomeModal 
        visible={isVisible}
        width="400" 
        height="300" 
        effect="fadeInUp" 
        //onClickAway={closeModal}
>*/} 
        {isVisible? 
        <div>
          <h1>Assign Meals and Routine for this day. You have to create routines and meals before you add it to a clendar date</h1>
          <p>Choose date</p>
          <DatePicker
              showIcon
              toggleCalendarOnIconClick
              selected={startDate}
              onChange={(date:any) => setStartDate(date)}
              
              
            
              showTimeSelect
              dateFormat="Pp"
              isClearable
              placeholderText="No date selected"
      >
        <p>Don't forget to add meals to go with your exercises</p>
    </DatePicker>
            <div className="flex flex-row w-full">
              <div className="flex flex-col flex-1 items-center">
                <p>username:{auth.username}</p>
                                    {/*<DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">Choose Routine</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup></DropdownMenuGroup>
                              {
                                routines.map((rotine:any)=>{})
                              }
                            </DropdownMenuContent>
                            </DropdownMenu>*/}
                <div className="flex flex-row w-full gap-3 items-center">
                  <div> {
                    
                  routines? <select className="text-black" onChange={(e:any)=>handleSelectRoutine(e.target.value)}>
                  {routines.map((routine:any) => (
                    <option key={routine.id} value={routine.id}>
                  {routine.name}
                    </option>
                    ))}
                  </select>:  <Skeleton variant="rectangular" width={500}  height={40} />
                      }</div>
                    <div>
                  {
                    
                    meals? <select className="text-black" onChange={(e:any)=>handleSelectMeal(e.target.value)}>
                    {meals.map((meal:any) => (
                      <option key={meal.id} value={meal.id}>
                    {meal.name}
                  </option>
                ))}
                  </select>:  <Skeleton variant="rectangular" width={500}  height={40} />
                  }

              </div>
                  
                
              </div>
       
              </div>
                <div className='flex-2 flex-col flex'>
                <div>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label>Specific Time!</label>
                  </div>
                  <div className={isChecked ? 'block' : 'hidden'}>
                    <select className="text-black" onChange={(e) => handleSelectTime(e.target.value)}>
                        {times.map((time) => (
                      <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                      </select>
                      </div>     
                </div>
            </div>
            <button className="bg-gray-100 text-black" onClick={()=>{AddToCal()}}>Submit</button>
          <button onClick={closeModal}>Cancel CalendarEvent</button>
            
         </div>
      :<></>}
   
  </div>
    )
     

}

export default Calendar
