require("dotenv").config();
require("express-async-errors");

// extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

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

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

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

start();
