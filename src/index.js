const express = require('express')
const app = express()
const path = require('path')



// Static files
app.use(express.static(path.join(__dirname,'public')))



const port = 3000
app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`)
})