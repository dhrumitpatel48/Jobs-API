const { StatusCodes } = require("http-status-codes");
const User = require("../models/User.model");
const BadRequestError = require("../errors/bad-request");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide name, email and passeword.");
  }
  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("login user");
};

module.exports = {
  register,
  login,
};
