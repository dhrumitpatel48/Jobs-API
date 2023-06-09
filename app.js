require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

// Connect DB
const connectDB = require("./db/connect");

// routes
const authRouter = require("./routes/auth.route");
const jobsRouter = require("./routes/jobs.route");

// error handler
const notFound = require("./middleware/not-found.middleware");
const errorHandler = require("./middleware/error-handler.middleware");

const authenticateUser = require("./middleware/authentication.middleware");

app.use(express.json());

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is runnning of port : ${port}`));
  } catch (error) {
    console.log(error);
  }
};

try {
  await start();
} catch (error) {
  console.log(error);
}
