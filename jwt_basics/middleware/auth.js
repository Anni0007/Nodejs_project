const CustomAPIError = require("../errors/custom-error")
const jwt = require('jsonwebtoken')

const authentication = async (req,res,next)=>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new CustomAPIError('Not Authorized', 400)
    }
    // console.log("auth header", authHeader);

    const token = authHeader.split(' ')[1]
    // console.log("token splitted", token);

    
    try {
        const decodedToken =  jwt.verify(token, process.env.JWT_SECRET)
        console.log(decodedToken)
        req.user = decodedToken.username
        next()
    } catch (error) {
        throw new CustomAPIError('Not authorized to access this route', 401)
    }
}

module.exports = authentication