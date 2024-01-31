const axios = require ("axios")
const express = require('express');


const app = express();
  

let newData = [];
async function data(){
    try{
        const response = await  axios.get("https://jsonplaceholder.typicode.com/users")

       newData = response.data
        
        
    }catch(err){
        console.log(err)

    }

}

data()









app.listen(3000,function(){
    console.log("app is listenign on port 3000")
});

app.get("/data",(req, res)=>{

    res.send(newData)


    
    


})



