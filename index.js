const express = require("express")
const dotenv = require("dotenv")

const server = require("./server")

const userRoutes = require("./routes/userRoute")
const agentRoutes = require("./routes/agentRoute")
const propertyRoutes = require("./routes/propertyRoute")

dotenv.config({path: "./.env"})

const app = express()
app.use(express.json())



// Mounting routes
// app.use("/api/v1/users", userRoutes)
// app.use("/api/v1/agent", agentRoutes)
app.use("/api/v1/properties", propertyRoutes)

app.get('/',(req,res)=>{
    res.send('index working')
})

// Handling unhandled routes
app.all("*", (req, res) => {
    res.status(404).json({
        status: "error",
        message: "Sorry! The resource you are looking for could not be found."
    })
})



// Start Server
server.startServer()
