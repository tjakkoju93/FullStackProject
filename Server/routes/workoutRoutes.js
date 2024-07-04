const express = require('express')
const authUser = require('../middleware/userMiddleware.jsx') 
const router = express.Router()
const {getWorkouts, getWorkoutId, createWorkout, updateWorkout, deleteWorkout} = require('../controller/workoutControllers.js')

router.use(authUser)



//Get Entire Data
router.get('/',getWorkouts)

//get data by id
router.get('/:id',getWorkoutId)

//create record
router.post('/create',createWorkout)

//update record
router.patch('/:id',updateWorkout)

//delete record
router.delete('/delete/:id',deleteWorkout)

module.exports =  router 