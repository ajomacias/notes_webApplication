const jwt = require('jsonwebtoken');

const createToken = (data)=>{
    const userForToken = data;
    const token = jwt.sign(userForToken, process.env.SECRET)
    return token;
}
module.exports = createToken;