require('../DB/connection.js')
const Workout = require ('../models/workoutModels.js');


//get all data
const getWorkouts = async (req,res)=>{

    const user_id = req.user._id ;
    
    try{
        const workoutData  = await Workout.find({user_id}).sort({createdAt : -1});
        res.status(200).json(workoutData)

    }catch(err){
        res.status(400).json({error:err.message})
    }
}

//get data by id
const getWorkoutId = async(req,res)=>{

    try{
        const id = req.params.id;
        
        const workoutData  = await Workout.findById({_id:id});
        res.status(200).json(workoutData);

    }catch(err){
        res.status(500).send({error:err.message})
    }
}

//creating a new record
const createWorkout = async(req,res)=>{
    const {title,reps,load} = req.body   
    const user_id = req.user._id   
    try{
        // requesting the user who has logged in to get the id
        const newWorkout = new Workout({title,reps,load , user_id})
        const workout = await newWorkout.save();
        res.status(201).json([workout])

    }catch(err){
        res.status(500).send({error:err.message})
    }
}

//update record

const updateWorkout = async(req,res)=>{
    try{
        const id = req.params.id
        const workout = await Workout.findByIdAndUpdate({_id:id},req.body,{new:true});
        res.status(201).json(workout)

    }catch(err){
        res.status(500).send({error:err.message})
    }
}

//delete record
const deleteWorkout = async (req,res)=>{

    try{
        const id = req.params.id
        console.log(id)
        const workoutdelte = await Workout.findByIdAndDelete({_id:id})
        res.status(200).json(workoutdelte)

    }catch(err){
        res.status(500).send({error:err.message})
    }

}

module.exports = {
    getWorkouts,
    getWorkoutId,
    createWorkout,
    updateWorkout,
    deleteWorkout
}