const app = require("./app");
const { connectDatabase } = require("./config/database");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");
const multer = require("multer");
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(fileUpload({
  useTempFiles:true
}))

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
