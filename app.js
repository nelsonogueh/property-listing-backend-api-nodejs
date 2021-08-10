const express = require("express")
const dotenv = require("dotenv")

const db = require("./db/dbConnection")
const userRoutes = require("./routes/userRoute")
const agentRoutes = require("./routes/agentRoute")
const propertyRoutes = require("./routes/propertyRoute")
const app = express()

dotenv.config({path: "./.env"})

//Middlewares
app.use(express.json())

 // Database connection
db()
     

    //Mounting routes
app.use("/api/v1/users", userRoutes)
app.use("/api/v1/agent", agentRoutes)
app.use("/api/v1/properties", propertyRoutes)



// Handling unhandled routes
app.all("*", (req, res) => {
    res.status(404).json({
        status: "error",
        message: "Sorry! The resource you are looking for could not be found."
    })
})
   
// Start Server
    app.listen(process.env.PORT, () => {
        console.log(`Server running at port ${process.env.PORT}`)

    })



