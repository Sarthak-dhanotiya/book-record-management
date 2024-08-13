const {bookmodel,usermodel}=require("../model/index");


exports.getallusers=async(req,res)=>{
    const users=await usermodel.find();

    if(users.length===0){
        res.status(404).json({
            success:false,
            message:"error user is not found",
        })

    }
    res.status(200).json({
        success:true,
        message:"success",
        data:users,

    });
}

exports.getuserbytheirid=async(req,res)=>{
    const {id}=req.params;
    const user=await usermodel.findById(id);
    if(!user){
        res.status(404).json({
            success:false,
            message:"user is not found",
        })
    }
    return res.status(200).json({
        success:true,
        message:"user is foundede!!",
        data:user,

    });
}


exports.deleteuser=async(req,res)=>{
    const {id}=req.params;
    const user=await usermodel.deleteOne(id);

    if(!user){
        res.status(404).json({
            success:false,
            message:"user is not founded",

        })
    }
    return res.status(200).json({
        success:true,
        message:"user deleted",
        data:user,
    })
}

exports.updateuser = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const user = await usermodel.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        ...data,
      },
    },
    { new: true }
  );
  return res.status(200).json({
    success: true,
    message: "User Updated !!",
    data: updateuser,
  });
};


exports.createNewUser = async (req, res) => {
  const { id, name, surname, email, subscriptionType, subscriptionDate } =
    req.body;

  const newUser = await usermodel.create({
    name,
    surname,
    email,
    subscriptionType,
    subscriptionDate,
  });

  return res.status(201).json({
    success: true,
    message: "User Added Succesfully",
    data: newUser,
  });
};