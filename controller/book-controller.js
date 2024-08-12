const { bookmodel, usermodel } = require("../model/index");


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

}



module.exports={getallBooks,getbookbyid,getallissuedbooks};