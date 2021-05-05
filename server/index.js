require("dotenv").config()
const cors = require("cors")
const axios  = require("axios")
const express = require("express")
const createConnection =require("./connection/index")
const app = express()
const bodyParser = require("body-parser");
app.use(cors())
app.use(express.static("public"))
app.use(bodyParser.json())


const accountsModal = require("./modals/accountsModal");

//routes
const opperationsRouter =require("./routes/opperation")


//call conection
createConnection();

app.use("/opp", opperationsRouter)





app.post("/addOpperation", async (req, res, next) => {
    console.log(req.body)
    const {accountNumber , loan ,payments, interest,income,output} = req.body
    try {
        const result = await accountsModal.insertMany([{accountNumber : accountNumber , loan:loan ,payments:payments ,interest:interest ,income:income , output:output}])
        if (result)
            return res.json("add success")
        return res.status(400).send("something went wrong...")

    } catch (error) {
        console.log(error)
        return res.status(400).send("something went wrong...")

    }
})



app.listen(5000)