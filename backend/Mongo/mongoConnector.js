const mongoose = require("mongoose");

const createDBConnection = async () =>  {
    return await mongoose.connect('mongodb://ec2-18-117-114-203.us-east-2.compute.amazonaws.com/CRUD', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
}
module.exports = {createDBConnection};