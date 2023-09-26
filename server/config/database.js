const mongoose = require("mongoose");

exports.connect = () => {
  mongoose
    .connect(process.env.DB_LINK)
    .then(() => {
      console.log("DB connection established");
    })
    .catch((e) => {
      console.error(e.message);
    });
};
