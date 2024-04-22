import React from 'react'

type Props = {}

const RoutineCard = ({id,description}:{id:number,description:string}) => {
  return (
    <div>
        <h1>{}</h1>
       <p className="text-white">{description}</p>
    </div>
  )
}

export default RoutineCard