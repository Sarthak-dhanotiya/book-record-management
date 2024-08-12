const express=require("express");
const dotenv=require("dotenv");

const DbConnection=require("./databaseconnection.js");

//  const { users } = require("./data/users.json");

const usersRouter = require("./routes/users.js");
const booksRouter = require("./routes/books.js");

dotenv.config();

const app=express();

DbConnection();


const port = 8081;
app.use(express.json());



 app.get("/", (req, res) => {
  res.status(200).json({
   message:"server is up",
    data: "hey",
  });
});

app.use("/users", usersRouter);
app.use("/books", booksRouter);



app.get("*",(req,res)=>{
    res.status(404).json({
      message:"error",
    });
  });

app.listen(port,()=>{
  console.log(`json created usingg server ${port}`);
});