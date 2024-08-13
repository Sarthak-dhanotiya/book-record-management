const express=require("express");

const { users } = require("../data/users.json");

const router =express.Router();


const { bookmodel, usermodel } = require("../model/index");


const {
  getallusers,
  getuserbytheirid,
  deleteuser,
  updateuser,
  createNewUser,
} = require("../controller/user-controller");


router.get("/", getallusers);
// router.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: users,
//   });
// });

//   route:/users/id,
//   method:GET
//   discription:FIND THE SINGLE USER,
// access:public
//   parameter:none


router.get("/:id",getuserbytheirid);
// router.get("/:id", (req, res) => {
//   const { id } = req.params;

//   const user = users.find((each) => each.id === id);

//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: "404 error find:-",
//     });
//   }
//   return res.status(200).json({
//     success: true,
//     message: "success",
//     data: user,
//   });
// });

//   route:/users,
//   method:POST
//   discription:creating the new user,
// access:public
//   parameter:none


router.post("/", createNewUser);
// router.post("/", (req, res) => {
//   const { id, name, surname, email, subscriptionType, subscriptionDate } =
//     req.body;

//   const user = users.find((all) => all.id == id);
//   if (user) {
//     return res.status(404).json({
//       success: false,
//       message: "the user is already exists",
//     });
//   }
//   users.push({
//     id,
//     name,
//     surname,
//     email,
//     subscriptionType,
//     subscriptionDate,
//   });
//   return res.status(201).json({
//     success: true,
//     message: "success",
//     data: users,
//   });
// });

//   route:/users/:ID,
//   method:PUT(update )
//   discription:update the information of user,
// access:public
//   parameter:none

router.put("/:id",updateuser);
// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const { date } = req.body;

//   const user = users.find((each) => each.id === id);
//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: "sorry!user is not found",
//     });
//   }
//   const updateusers = users.map((each) => {
//     if (each.id === id) {
//       return {
//         ...each,
//         ...date,
//       };
//     }
//     return each;
//   });
//   res.status(200).json({
//     success: true,
//     message: "success",
//     body: updateusers,
//   });
// });

router.delete("/:id",deleteuser);
// router.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   const user = users.find((each) => each.id === id);
//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: "user not found",
//     });
//   }

//   const deletelement = users.indexOf(user);

//   users.splice(deletelement, 1);

//   return res.status(200).json({
//     success: true,
//     message: "successfully deleted",
//     data: users,
//   });
// });


module.exports=router;