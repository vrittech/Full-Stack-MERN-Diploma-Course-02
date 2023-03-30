const uploadImage = async (req, res) => {
  try {
    res.send(req.file);
  } catch (error) {
    res.send({
      message: error,
    });
  }
};

module.exports = {
  uploadImage,
};
