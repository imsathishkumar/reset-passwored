const express = require('express')
const { router } = require('./routes/userRoute')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const mongoose = require('mongoose')
//

app.use(express.json())
app.use(cors())
app.use('/api',router)
app.get('/',(req,res)=>{
    res.json('Welcome')
})
const MONGO = process.env.MONGO_URI
const PORT = process.env.PORT || 5000

mongoose.connect(MONGO, {useNewUrlParser:true,useUnifiedTopology:true})
    .then( ()=> app.listen(PORT, () => console.log('Server Running in 5000')))
    .catch((err)=> console.log(err))

mongoose.set('useFindAndModify',false)    

