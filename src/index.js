const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("** MongoDB Connected...");
  } catch (error) {
    console.error("** MongoDB Error" + error.message);
    process.exit(1);
  }
};

const getByPagination = async (model, page, limit) => {
  const skip = page * limit;
  const total = await model.countDocuments();
  const numberOfPages = Math.ceil(total / limit);
  const data = await model.find().skip(skip).limit(limit);
  const currentPage = isNaN(page) ? 0 : page;
  return { data, numberOfPages, currentPage };
};

const getByRefPagination = async (model, ref, page, limit) => {
  const skip = page * limit;
  const total = await model.countDocuments();
  const numberOfPages = Math.ceil(total / limit);
  const data = await model.find().populate(ref).skip(skip).limit(limit);
  const currentPage = isNaN(page) ? 0 : page;
  return { data, numberOfPages, currentPage };
};

module.exports = { connectDB, getByPagination, getByRefPagination };
