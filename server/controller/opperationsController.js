const accountsModal = require("../modals/accountsModal");


async function getAllOpperations(){
        const result = await accountsModal.find({} ,{ __v: false });   
        console.log(result)
        return result;     
}



module.exports = {getAllOpperations };