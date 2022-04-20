// require("dotenv").config();
// const keys = process.env.OTP;
// const { Employee } = require("../models");
// exports.loginPatient = async (req, res, next) => {
//   const { error, value } = loginValidator(req.body);
//   if (error) {
//     return res.status(400).json({ message: error.details[0].message });
//   }
//   const is_userExist = await Employee.findOne({
//     where: { email: req.body.email, password: req.body.password },
//   });

//   if (!is_userExist) {
//     return res.json({
//       message: "Incorrect email or password, please check and try again",
//     });
//   }

//   const payload = {
//     id: is_userExist?.id,
//     email: is_userExist?.email,
//   };
//   let token = jwt.sign(payload, keys, {
//     expiresIn: 86400,
//   });

//   if (token) {
//     return res.json({
//       message: "login successful",
//       token: "Bearer " + token,
//     });
//   }
// };
