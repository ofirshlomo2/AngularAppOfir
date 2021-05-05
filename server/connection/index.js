const mongoose = require("mongoose")

const {
    MONGODB_HOST,
    MONGODB_DATABASE_NAME,
    MONGODB_PORT
} = process.env

async function createConnection() {
    console.log("Creating mongoDB connection")

    try {
        await mongoose.connect(`mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE_NAME}`,
            { useUnifiedTopology: true, useNewUrlParser: true , useCreateIndex: true,})

        console.log(`Server is connected to: ${MONGODB_HOST}`)
    } catch (ex) {
        console.log(ex)
        process.exit(1)
    }
}

module.exports = createConnection