const express = require("express")
const cors = require("cors")

const app = express()

// allow requests from anywhere (GitHub Pages etc)
app.use(cors())

// allow JSON
app.use(express.json())

// test route
app.get("/", (req,res)=>{
  res.send("Server running")
})

// receive messages
app.post("/send",(req,res)=>{

  const message = req.body.message

  console.log("Message received:", message)

  res.json({status:"ok"})
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
  console.log("Server running on port", PORT)
})