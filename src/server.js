import mongoose from "mongoose";

import app from "./index";

const startServer = async () => {
  const DB_LOCAL = "mongodb://localhost:27017/graphql";

  await mongoose
    .connect(DB_LOCAL, {
      useCreateIndex: true,

      useNewUrlParser: true,

      useUnifiedTopology: true,

      useFindAndModify: false,
    })
    .then(() => console.log("Connection To Database Was Succesful!!!"))

    .catch((err) => console.log("Error Connecting To Database", err));

  const port = 3000;

  app.listen(port, () => {
    console.log(`Server Started At Port http://localhost:${port}`);
  });
};

startServer();
