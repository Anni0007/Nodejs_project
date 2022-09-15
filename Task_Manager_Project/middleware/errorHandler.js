const { CustomeAPIErrror } = require("../errors/customError")

const errorHandlerMiddleware = (err, req ,res, next)=> {
    if(err instanceof CustomeAPIErrror) {
        console.log(err.message);
        return res.status(err.statusCode).json({error_msg: err.message})
    }
    return res.status(500).json({msg:'Something went wrong, please try again'})
}

module.exports = errorHandlerMiddleware