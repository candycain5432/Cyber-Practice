const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()

app.use(express.json())
app.use(express.static("public"))

app.post("/send", (req, res) => {

  const message = req.body.message

  console.log("Received:", message)

  fs.appendFileSync("messages.txt", message + "\n")

  res.json({status:"ok"})
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Server running")
})