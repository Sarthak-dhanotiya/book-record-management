const { bookmodel, usermodel } = require("../model/index");



const issuebook=require("../DTOS/book-dto");


const getallBooks=async (req,res)=> {
    
    const book=await bookmodel.find();

    if(book.length===0){
        return res.status(404).json({
            success:false,
            message:"books not found",
        });
        
    }
    return res.status(200).json({
        success:true,
        message:"bookfound",
    });


}

const getbookbyid=async(req,res)=>{
       const {id}=req.params;
       const user=await bookmodel.findById(id);
       if(!user){
       return  res.status(404).json({
            success:false,
            message:"error",
        });
       }
return res.status(200).json({
    success:true,
    message:"successs full errror are not occur",
    data:user,
});

}

const getallissuedbooks= async(req,res)=>{
  const users=await usermodel.find({
        issuedBook:{$exists:true},
   }).populate("issuedBook");

//    data transfer object(DTD)

const issuebokkss=users.map((each)=>{
    new issuebook(each);
});

if(issuebokkss.length===0){
    res.status(404).json({
        success:false,
        message:"no book have been issued yet",
    });
}
return res.status(200).json({
    success:true,
     message:"success",
})
}


const addnewbook=async(req,res)=>{

    const data=req.body;

    if(!data){
        res.status(404).json({
            success:false,
            message:"NO BOOK FOUNDED"
        });
    }
    const book= await bookmodel.create(data);

    const getbooks=await bookmodel.find();

    return res.status(201).json({
        success:true,
        message:"success",
        data:getbooks,
    });
}


const updatedbook=async(req,res)=>{

    const {id}=req.params;
    const {data}=req.body;

    const book= await bookmodel.findOneAndUpdate({
       _id:id,
    },
data,
{
    new:true,
});
return res.status(200).json({
    success:true,
    message:"updated a book by their id",
    data:book,
});

}



module.exports = { getallBooks, getbookbyid, getallissuedbooks, addnewbook,updatedbook };