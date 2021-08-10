const express = require("express")

const Router = express.Router()
const responseInfo = {
    status: "",
    message: ""
}


Router.get("/", (req, res, next) => {
    responseInfo.status = "success"
    responseInfo.message = "Welcome to property route"

    res.send(responseInfo)

})




module.exports = Router