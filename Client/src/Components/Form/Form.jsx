import React, { useState } from 'react'
import { useContext } from 'react';
import axios from 'axios';
import { Data } from '../../Context/WorkoutContext';
import './FormStyle.scss'
import { UseAuthContext } from '../../Hooks/UseAuthContext'


const Form = () => {

  const { workouts, setWorkouts, getWorkouts, form, setForm, updateForm, setUpdateForm } = useContext(Data)

  const { user } = UseAuthContext()
  const [laptop,setLaptop]= useState(null)

  //CREATE FORM FUNCTIONS
  const updateFormField = (e) => {
    const { name, value } = e.target;
  
    setForm({
      ...form,
      [name]: value,
    })
  }

  const createWorkout = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5300/api/workouts/create", form, {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    });
    // const res = [...workouts,response.data]
    console.log(response.data)
    // setLaptop(res)
    setWorkouts([...workouts,response.data])
   
    setForm({
      title: "",
      reps: "",
      load: ""
    })
  }

  //UPDATE FORM FUNCTIONS

  const handleUpdateFieldChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm({
      ...updateForm,
      [name]: value
    })
  }

  //DELETE request
  const updateWorkout = async (e) => {
    e.preventDefault();
    const { _id, title, reps, load } = updateForm;
    await axios.patch(`http://localhost:5300/api/workouts/${_id}`, { title, reps, load },{
      headers : {
        "Authorization" : `Bearer ${user.token}`
      }
    })
    console.log(`from form.js , user id is ${user._id}`)

    getWorkouts()
    setUpdateForm({
      _id: null,
      title: "",
      reps: "",
      load: ""

    })

    

  }
  

  return (
    <>
      {
        !updateForm._id && (
          <div className='form'>
            <h1>Create Record</h1>

            <form onSubmit={createWorkout}>


              <div className="field">
                <label htmlFor="">Title</label>
                <input type="text" name="title" value={form.title} id="" onChange={updateFormField} />
              </div>

              <div className="field">
                <label htmlFor="">Reps</label>
                <input type="tel" name="reps" value={form.reps} id="" onChange={updateFormField} />
              </div>

              <div className="field">
                <label htmlFor="">Load (in Kg)</label>
                <input type="tel" name="load" id="" value={form.load} onChange={updateFormField} />
              </div>


              <button>Submit</button>
            </form>

          </div>
        )
      }
      {
        updateForm._id && (
          <div className="form">
            <h1>Edit Record</h1>


            <form onSubmit={updateWorkout}>
              <div className="field">
                <label htmlFor="">Title</label>
                <input type="text" name="title" value={updateForm.title} id="" onChange={handleUpdateFieldChange} />

              </div>

              <div className="field">
                <label htmlFor="">Reps</label>
                <input type="tel" name="reps" value={updateForm.reps} id="" onChange={handleUpdateFieldChange} />
              </div>
              <div className="field">
                <label htmlFor="">Load (in Kg)</label>
                <input type="tel" name="load" id="" value={updateForm.load} onChange={handleUpdateFieldChange} />
              </div>
              <button >Update</button>
            </form>

          </div>
        )}
    </>
  )
}

export default Form
