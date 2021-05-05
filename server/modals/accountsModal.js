const mongoose =require("mongoose")


const accountSchema = new mongoose.Schema({
   
    accountNumber: {
        type: Number,
        default: true
    },
    type: {
        type: String,
        default: false
    },
    loan: {
        type: Number,
        default: false
    },
    date: {
        type: Date,
        default: new Date()
    },
    payments: {
        type: Number,
        default: false
    },
    interest:{
        type: Number,
        default: false
    },
    income: {
        type: Number,
        default: false,
    },
    output: {
        type: Number,
        default: false,
    },
})


const accountsModal = mongoose.model("accounts", accountSchema)
module.exports = accountsModal;


