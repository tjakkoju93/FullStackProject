import React from 'react'
import { createContext, useState } from 'react'
import axios from 'axios'
import { useAuthContext } from '../Hooks/useAutContext'

export const Data = createContext();


const WorkoutContext = ({ children }) => {


  const { user } = useAuthContext();

  //GET REQUEST STATE
  const [workouts, setWorkouts] = useState([]);


  //POST Request State
  const [form, setForm] = useState({
    title: "",
    reps: "",
    load: ""
  })

  //GET Request Function
  const getWorkouts = async () => {
    console.log("in get workouts")
    const responses = await axios.get("http://localhost:5300/api/workouts", {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    });
    const data = responses.data;
    console.log(`response data from workout context ${responses.data}`)
    setWorkouts(data);
  }

  //DELETE Request Function
  const deleteWorkout = async (_id) => {
    await axios.delete(`http://localhost:5300/api/workouts/delete/${_id}`, {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    })
  }

  //UPDATE Request Function
  const [updateForm, setUpdateForm] = useState(
    useState({
      _id: null,
      title: "",
      reps: "",
      load: ""
    })
  )

  const toggleUpdate = (item) => {
    setUpdateForm({
      _id: item._id,
      title: item.title,
      reps: item.reps,
      load: item.load
    })

  }

  return (
    <>
      <Data.Provider value={{ workouts, setWorkouts, getWorkouts, form, setForm, deleteWorkout, toggleUpdate, updateForm, setUpdateForm }}>
        {
          children
        }
      </Data.Provider >
    </>
  )
}

export default WorkoutContext
