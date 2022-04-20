// const {
//   Employee,
//   Department,
//   Job,
//   Salary,
//   EmployeeJob,
//   User,
//   Sequelize,
//   Op,
// } = require("../models");
// const cloudinary = require("../util/cloudinary");

// const winston = require("../loggers");
// exports.registerPatient = async (req, res, next) => {
// const { department_name } = req.body;
// const result = await Employee.create([
//   {
//     department_name: "Tech",
//   },
//   { department_name: "Product" },
//   { department_name: "Sale" },
//   { department_name: "Admin" },
//   { department_name: "Partnership" },
// ]);

// const player = await Player.findOne({ where: { id: 4 } });
// const jersey = await Jersey.findOne({ where: { id: 4 } });
//note with all these, we have access to 3 helper method
//setJersey,createJersey,getJersey || setPlayer,getPlayer,createPlayer
// player.setJersey(jersey); //set the payer id to their jersey number

// const product = await Product.findOne({ where: { id: 1 } });
// const customer = await Customer.findAll();
// const result = await product.addCustomers(customer);

// const { name, department, email, phone, salary } = req.body;

//one To Many relationship
// const depth = await Department.findOne({
//   where: { department_name: department },
// });
// await Employee.destroy({ where: { id: { [Op.in]: [7, 8] } } });
// const retrievedSalary = await Salary.findOne({ where: { salary: salary } });
// const result = await depth.createEmployee({
//   name,
//   email,
//   phone,
//   salary_id: retrievedSalary.id,
// });
//one To Many relationship
// create new employee with a specific department id
// const employee = await Employee.findOne({ where: { id: 5 } });
// const result2 = await employee.createSalary({ salary: "2000" });

//const result = await depth.getEmployees(); //getting the employee that belong to the req department

//many to many relationship
// const employee = await Employee.findOne({ where: { id: 10 } });
// const result = await employee.createJob({ job_title: "hardware" });
// await Job.destroy({ where: { id: { [Op.in]: [1, 2, 3, 4, 5] } } });

// =====================================================
//one to one relationship
// const employee = await Employee.findOne({
//   where: { id: 5 },
// });
// const result = await employee.createSalary({ salary: "2000" }); // create new employee with a specific department id
// const result = await depth.getEmployees(); //getting the employee that belong to the req department

//many to many relationships Query
// const result = await Employee.findAll({
//   include: [
//     {
//       model: Department,
//       required: false,
//       // attributes: ["department_name"],
//     },
//     {
//       model: Salary,
//       required: false,
//       // attributes: ["salary"],
//     },
//     {
//       model: Job,
//       required: true,
//       // attributes: ["job_title"],
//     },
//   ],
// });

// return res.json({
//   message: "created successful",data:result
// });
//   return res.json({
//     message: "created successful",
//   });
// };
// const cloudinary = require("../util/cloudinary");
// const fs = require("fs");

// exports.FileToCloudinary = async (req, res) => {
//save image to cloudinary
// const result = await cloudinary.uploader.upload(req.file.path);
//save to database
// let user = await User.create({
//   image: result.secure_url,
//   image_id: result.public_id,
// });

//update image in  cloudinary
// const user = await User.findOne({ where: { id: 2 }, raw: true });
// Delete image from cloudinary
// await cloudinary.uploader.destroy(user.image_id);
// Upload image to cloudinary
// const result = await cloudinary.uploader.upload(req.file.path);
// const data = {
//   image: result.secure_url || user.image,
//   image_id: result.public_id || user.image_id,
// };
// const updated = await User.update(data, { where: { id: user.id } });

//delete image
// const user = await User.findOne({ where: { id: 2 }, raw: true });
// Delete image from cloudinary
// await cloudinary.uploader.destroy(user.image_id);
//delete from database
// const deleted = await User.destroy({ where:{ id:user.id}})

//   return res.json({ message: "single image route" });
// };

// module.exports.multipleFile = async (req, res) => {
// const uploader = async (path) => await cloudinary.uploads(path, "Image");
// const urls = [];
// const files = req.files;

// for (const file of files) {
//   const { path } = file;
//   const newPath = await uploader(path);
//   urls.push(newPath);
//   fs.unlinkSync(path);
// }
// return res.json({ message: "multiple image uploaded", data: urls });
//   return res.json({ message: "multiple image uploaded" });
// };

// module.exports.audioUpload = async (req, res) => {
//   // SEND AUDIO TO CLOUDINARY
//   const { path } = req.file;
//   const fName = req.file.originalname.split(".")[0];
//   cloudinary.uploader.upload(
//     path,
//     {
//       resource_type: "raw",
//       public_id: `AudioUploads/${fName}`,
//     },
//     (err, audio) => {
//       if (err) return res.send(err);
//       fs.unlinkSync(path);
//       return res.json({ audio: audio.secure_url });
//     }
//   );
// };

// module.exports.videoUpload = async (req, res) => {
//   // SEND VIDEO TO CLOUDINARY
//   const { path } = req.file;
//   const fName = req.file.originalname.split(".")[0];
//   cloudinary.uploader.upload(
//     path,
//     {
//       resource_type: "video",
//       public_id: `VideoUploads/${fName}`,
//       chunk_size: 6000000,
//       eager: [
//         {
//           width: 300,
//           height: 300,
//           crop: "pad",
//           audio_codec: "none",
//         },
//         {
//           width: 160,
//           height: 100,
//           crop: "crop",
//           gravity: "south",
//           audio_codec: "none",
//         },
//       ],
//     },
//     (err, video) => {
//       if (err) return res.send(err);
//       fs.unlinkSync(path);
//       return res.json({ video: video.secure_url });
//     }
//   );
// };
// const fs = require("fs");
// const path = require("path");
// const { Buffer } = require("buffer");
// const readFile = fs.readFileSync(
//   path.join(__dirname, "../util/test1.txt"),
//   "utf-8"
// );
// winston.info(readFile);
// fs.writeFileSync(
//   path.join(__dirname, "../util/test2.txt"),
//   "writing a new file"
// );
// winston.info(createFile);

// const buf1 = Buffer.allocUnsafe(10);

// const buf = Buffer.from("hello world", "utf8");
// console.log(buf);

// ============================

// const buf = Buffer.from("hello world", "utf8");
// console.log(buf.toString("ascii")); // hello world
// console.log(buf.toString("hex"));
// Prints: 68656c6c6f69726a696a72696a72776f726c64
// console.log(buf.toString("base64"));
//console.log(buf.toString("binary")); //hello world
// Prints: aGVsbG8gd29ybGQ=

// console.log(Buffer.from("fhqwhgads", "utf8"));
// Prints: <Buffer 66 68 71 77 68 67 61 64 73>
// console.log(Buffer.from("fhqwhgads", "utf16le"));
// Prints: <Buffer 66 00 68 00 71 00 77 00 68 00 67 00 61 00 64 00 73 00>

// ============================================
// const buf = Buffer.from("this is a buffer");

// console.log(buf.includes("this"));
// // Prints: true
// console.log(buf.includes("is"));
// // Prints: true
// console.log(buf.includes(Buffer.from("a buffer")));
// // Prints: true
// console.log(buf.includes(97));
// // Prints: true (97 is the decimal ASCII value for 'a')
// console.log(buf.includes(Buffer.from("a buffer example")));
// // Prints: false
// console.log(buf.includes(Buffer.from("a buffer example").slice(0, 8)));
// // Prints: true
// console.log(buf.includes("this", 4));
// // Prints: false

// ==================================================
// const buf = Buffer.from("this is a buffer");

// console.log(buf.indexOf("this"));
// // Prints: 0
// console.log(buf.indexOf("is"));
// // Prints: 2
// console.log(buf.indexOf(Buffer.from("a buffer")));
// // Prints: 8
// console.log(buf.indexOf(97));
// // Prints: 8 (97 is the decimal ASCII value for 'a')
// console.log(buf.indexOf(Buffer.from("a buffer example")));
// // Prints: -1
// console.log(buf.indexOf(Buffer.from("a buffer example").slice(0, 8)));
// // Prints: 8

// const utf16Buffer = Buffer.from("\u039a\u0391\u03a3\u03a3\u0395", "utf16le");

// console.log(utf16Buffer.indexOf("\u03a3", 0, "utf16le"));
// // Prints: 4
// console.log(utf16Buffer.indexOf("\u03a3", -4, "utf16le"));
// // Prints: 6

// const buf = Buffer.from([0, 5]);
// console.log(buf.readInt16LE(0));

// const buf = Buffer.alloc(256);
// console.log(buf);
// const len = buf.write("\u00bd + \u00bc = \u00be", 0);

// console.log(`${len} bytes: ${buf.toString("utf8", 0)}`);
// Prints: 12 bytes: ½ + ¼ = ¾

// const buffer = Buffer.alloc(10);

// const length = buffer.write("abcd", 8);

// console.log(`${length} bytes: ${buffer.toString("utf8", 8, 10)}`);
// Prints: 2 bytes : ab
//===================other module===============
// const PromiseTimers = require("promise-timers");
// const delay = 5000;

// PromiseTimers.setTimeout(delay).then(function (args) {
//   console.log(args);
//   console.log("timeout done");
// });

//interval
// function method() {
//   console.log("hello world");
// }

// PromiseTimers.setInterval(delay, method).then(function (args) {
//   console.log(args);
//   console.log("interval done");
// });

//immediate
// PromiseTimers.setImmediate(2).then(function (args) {
//   console.log(args);
//   console.log("immediate done");
// });
