const express=require("express");

const router=express.Router();

const {
  getallBooks,
  getbookbyid,
  getallissuedbooks,
  addnewbook,
  updatedbook,
} = require("../controller/book-controller");

const {books}=require("../data/books.json");

const { users } = require("../data/users.json");


const{bookmodel,usermodel}=require("../model/index");



router.get("/", getallBooks);


// router.get("/",(req,res)=>{
//     res.status(200).json({
//         success:"true",
//         data:books,
//     });
// });

router.get("/issued", getallissuedbooks);







router.get("/:id", getbookbyid);

// router.get("/:id",(req,res)=>{
   
//     const {id}=req.params;

//     const user=books.find((all)=>all.id===id);
//     if(!user){
//        return  res.status(404).json({
//             success:"false",
//             message:"book is not found",
//         })
//     }

//     return res.status(200).json({
//         success:"true",
//         message:"book is founded",
//         data:books,
//     });
// });




router.post("/", addnewbook);
// router.post("/",(req,res)=>{
//     const {id,name,author,genre,price,publisher}=req.body;

//     const user=books.find((allbook)=> allbook.id==id);
//     if(user){
//         return res.status(404).json({
//           success: false,
//           message: "the user is already exists",
//         });
//     }

//         books.push({
//             id,
//             name,
//             author,
//             genre,
//             price,
//             publisher
//         });
//         return res.status(201).json({
//           success: true,
//           message: "success",
//           data: books,
//         });
// });

router.put("/:id", updatedbook);


//   route:/users/:ID,
//   method:delete
//   discription:delete the book,
// access:public
//   parameter:id

router.delete("/:id",(req,res)=>{
  const {id}=req.params;
  const book=books.find((even)=>even.id===id);

  if(!book){
    res.status(404).json({
      success:false,
      message:"book is not find",
    });
  }
  const deleteelement=books.indexOf(book);

  books.splice(deleteelement,1);

  return res.status(200).json({
    success:true,
    message:"success",
    data:books,


  });
});

module.exports=router;