require("dotenv").config();
const connectDB = require('./DB/connect')
const Schema = require('./models/schema')

const data = require('./schema.json')


const start = async()=>{ 

    try { 
     await connectDB(process.env.MONGO_URL);
      await Schema.create(data);
      console.log('Data Created');
    }
    catch(error){
         console.log(error);
    }
 };
 start();