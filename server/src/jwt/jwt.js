const jwt = require("jsonwebtoken");

const createToken = (data) => {
  const userForToken = data;
  const token = jwt.sign(userForToken, process.env.SECRET,{ expiresIn: '4d' });
  return token;
};
const verifyToken = async (tokenValue) => {
  const authorization = tokenValue;

  let token = null;

  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.split(" ")[1];
  }

  if (!token) {
    return null;
  }
  let decodeToken = null;
  try {
    decodeToken = jwt.verify(token, process.env.SECRET);
  } catch (err) {
    return null;
  }

  return decodeToken;
};
module.exports = {
  verifyToken,
  createToken,
};