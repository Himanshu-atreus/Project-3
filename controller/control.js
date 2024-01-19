const get =require('../models/schema')
const AllUsers = async(req,res)=>{ 
    
    const myData = await get.find({
       name:'himanshu',
    });
    res.status(200).json({myData});
   console.log(`${myData}`);
};
const AllTest = async(req,res)=>{ 
    res.status(200).json({message:"I AM ALL TESTs"});
    
};

module.exports = {AllUsers, AllTest};