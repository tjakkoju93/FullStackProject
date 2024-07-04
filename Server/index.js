require("dotenv").config();
const express = require('express')
const cors = require('cors')
const app = express()

//port
const port = process.env.PORT || 5500


//db connection
require('./DB/connection.js')

//required routes
const workoutRoutes = require("./routes/workoutRoutes.js")
const userRoutes = require("./routes/userRoutes.js")

//middleware
app.use(express.json()) 
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

//routes
app.use("/api/workouts",workoutRoutes)
app.use("/api/users",userRoutes)

app.listen(port,()=>{
    console.log(`Connected to port ${port}`)
})