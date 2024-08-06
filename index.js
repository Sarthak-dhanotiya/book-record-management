const express=require("express");

const app=express();

app.use(express.json());

const port=8081;
const {users}=require("./data/users.json");

app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: users,
  });
});

  //   route:/users/id,
//   method:GET
//   discription:FIND THE SINGLE USER,
// access:public
//   parameter:none


  app.get('/users/:id',(req,res)=>{
    const {id}=req.params;

    const user=users.find((each)=>each.id===id);

    if(!user){
      return   res.status(404).json({
 success:false,
        message:"404 error find:-",
      });
 }
      return  res.status(200).json({
        success: true,
        message: "success",
        data:user,
      });
    });
 
//   route:/users,
//   method:POST
//   discription:creating the new user,
// access:public
//   parameter:none

  app.post("/users",(req,res)=>{

    const {id,name,surname,email,subscriptionType,subscriptionDate}=req.body;

    const user=users.find((all)=>
      all.id==id);
    if(user){
      return res.status(404).json({
        success:false,
        message:"the user is already exists",
 });
       }
    users.push({
        id,
        name,
        surname,
        email,
        subscriptionType,
        subscriptionDate,
      });
      return  res.status(201).json({
        success:true,
        message:"success",
        data:users,
});
  });

  //   route:/users/:ID,
//   method:PUT(update )
//   discription:update the information of user,
// access:public
//   parameter:none
app.put("/users/:id",(req,res)=>{
  const {id}=req.params;
  const {date}=req.body;

  const user=users.find((each)=>each.id===id);
  if(!user){
  return  res.status(404).json({
      success:false,
      message:"sorry!user is not found",

    });
 }
 const updateusers=users.map((each)=>{
if(each.id===id){
  return {
    ...each,
    ...date,
  }
}
return each;
 })
 res.status(200).json({
  success:true,
  message:"success",
  body:updateusers,
 });


});

app.get("*",(req,res)=>{
    res.status(404,json({
      message:"error",
    }));
  });

app.listen(port,()=>{
  console.log(`json created usingg server ${port}`);
});