const express = require("express")

const app = express()

app.use(express.json())
app.use(express.static("public"))

app.post("/send", (req, res) => {

  const message = req.body.message

  console.log("Received message:", message)

  res.json({status:"ok"})
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})