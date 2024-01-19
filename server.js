require("dotenv").config();
const express = require('express');
const app  = express();
const PORT = process.env.PORT || 8080
const connectDB = require('./DB/connect')
const Routes = require("./routers/route");
//  app.get('/',(req,res)=>{ 
//     res.send('HEY YOU ARE ALIVE');
//  });
app.use('/api/route',Routes);

 const start = async()=>{ 

    try { 
   
     await connectDB(process.env.MONGO_URL);
     app.listen(PORT,()=>{
          console.log(`${PORT} HEY YOU ARE CONNECTED`);
     }); 
    }
    catch(error){
         console.log(error);
    }
 };
start();