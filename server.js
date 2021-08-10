const express = require("express")

const db = require("./db/dbConnection")

const app = express()





exports.startServer = () => {
    // Database connection
    db()

// Start Server
    app.listen(process.env.PORT, () => {
        console.log(`Server running at port ${process.env.PORT}`)

    })
}
