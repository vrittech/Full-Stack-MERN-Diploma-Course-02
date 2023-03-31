const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { DBURL } = require("./db/index.js");
const { userRoutes } = require("./routes/user.js");
const { categoriesRoutes } = require("./routes/category.js");
const { productsRoutes } = require("./routes/product.js");
const { imagesRoutes } = require("./routes/image.js");

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

app.use(express.static("public"));

userRoutes(app);
categoriesRoutes(app);
productsRoutes(app);
imagesRoutes(app);

app.listen(8080, () => {
  console.log("Success !");
});
