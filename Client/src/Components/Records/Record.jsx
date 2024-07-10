import React from 'react'
import { useEffect, useContext } from "react"
import { Data } from '../../Context/WorkoutContext'
import './RecordStyle.scss'
import edit from '../../assets/pencil.png'
import deletebtn from  '../../assets/delete.png';
import { useAuthContext } from '../../Hooks/useAutContext'

const Record = () => {
  const {user} = useAuthContext();

  //GET REQUEST
  const {workouts,getWorkouts,deleteWorkout,toggleUpdate} = useContext(Data)


  useEffect(() => { 
    if(user){
      getWorkouts();
    }
   }, [user,getWorkouts])


  return (
    <div className='mainrecord'>
      {
        // workouts && workouts.map((item) => {
        //   return (
        //     <div className="record" key={item._id}>
        //       <h2>Exercise : {item.title}</h2>
        //       <p>Reps : {item.reps}</p>
        //       <p>Load in Kg : {item.load}</p>
        //       <div className="btns">
        //         <img src={edit} onClick={() => { toggleUpdate(item) }} alt="" /> {" "}
        //         <img src={deletebtn} onClick={() => { deleteWorkout(item._id) }} alt="" />
              
            
        //       </div>
        //      </div>

        //   )
        // })

        
        console.log(workouts)
      }
    </div>
  )
}

export default Record
