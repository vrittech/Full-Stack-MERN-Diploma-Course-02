const { uploadImage } = require("../controllers/image.controller");
const upload = require("../multer");

const imagesRoutes = (app) => {
  app.post("/api/images", upload.single("image"), uploadImage);
};

module.exports.imagesRoutes = imagesRoutes;
