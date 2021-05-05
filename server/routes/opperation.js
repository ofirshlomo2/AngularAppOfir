const express = require("express")
const axios = require("axios")
const { getAllOpperations } = require("../controller/opperationsController")
const router = express.Router()



router.get("/", async (req, res, next) => {
    const result = await getAllOpperations();
    res.json(result)
})



module.exports = router;