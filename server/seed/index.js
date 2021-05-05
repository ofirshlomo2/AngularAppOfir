require("dotenv").config()
const createConnection = require("../connection/index");
const accountsModal = require("../modals/accountsModal");
createConnection();

setTimeout(() => {
    insertTasksToDb()
}, 1000);


async function insertTasksToDb() {
    try {
        const result = await accountsModal.insertMany(getAccounts());
        console.log(result)
    } catch (ex) {
        console.log(ex)
    } finally {
        
    }
}


function getAccounts() {
    return [
        {
            accountNumber: 11111,
            loan:50,
            date: new Date(),
            payments: 10,
            interest: 0.2,
            income: 250,
            output:200,
            creat_at: new Date().toLocaleDateString(),
            
        }, {
            accountNumber: 222222,
            loan:15000000,
            income: 500,
            output:100000,
            creat_at: new Date().toLocaleDateString(),
        },{
            accountNumber: 3333333,
            loan:1000,
            income: 200,
            output:200,
            creat_at: new Date().toLocaleDateString(),
        },
        {
            accountNumber: 4444444,
            loan:0,
            income: 150,
            output:200,
            creat_at: new Date().toLocaleDateString(),
        },
    ]
}