const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const { DBURL } = require("./db/index.js");
const { todoRoutes } = require("./routes/todo.js");
const { userRoutes } = require("./routes/user.js");
const { categoriesRoutes } = require("./routes/category.js");
const { productsRoutes } = require("./routes/product.js");
const path = require("path");

app.use(cors());

// database connection
main()
  .then(() => console.log("🙌. 🥳. 🎉. 🤩. 🤗"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DBURL);
}
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${Math.random() * 1000}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

app.post("/profile", upload.single("avatar"), function (req, res, next) {
  res.send(req.file);
});
// todoRoutes(app);
userRoutes(app);
categoriesRoutes(app);
productsRoutes(app);

app.listen(8080, () => {
  console.log("Success !");
});
