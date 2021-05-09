const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('DB Online')
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializacion')
    }
}



//mern_user
//dbpass: 626tVpNb3vGzrlq0

module.exports = {
    dbConnection
}