const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/ProjectFSW")
.then(()=>{
    console.log("connection is established")
}
)
.catch((err)=>{
    console.log(`error is ${err}`)
}

)