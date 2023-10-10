import { connect } from "./config/db"

const express = require("express")
const app = express()
const PORT = 8000
const cors = require("cors")

app.use(cors())
app.use(express.json())
connect()

app.listen(PORT, () => {
  console.log("Server run on port ", PORT)
})
