const express=require("express");

const app=express();

app.use(express.json());

const port=8081;
const {users}=require("./data/users.json");

app.get("/users",(req,res)=>{
  res.status(200).json({
    success:true,
    data:users,
  });

  app.get("*",(req,res)=>{
    res.status(404,json({
      message:"error",
    }))
  })
});

app.listen(port,()=>{
  console.log(`json created usingg server ${port}`);

});