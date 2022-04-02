const express = required('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        mesg:'This is the backend Server(DataBase) display of Deese Auto Sales '
    })
})

app.listen(5000)
