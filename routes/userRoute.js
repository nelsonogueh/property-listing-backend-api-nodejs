const express = require("express")
const app = express()

const Router = express.Router()
const responseInfo = {
    status: "",
    message: ""
}




Router.get("/", (req, res) => {
    responseInfo.status = "success"
    responseInfo.message = "Welcome to users route"

    res.status(200).json(responseInfo)
})



module.exports = Router