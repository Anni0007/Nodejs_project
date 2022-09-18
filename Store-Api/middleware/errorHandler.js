const errorHandlerMiddleware = async (err,res,req,next)=> {
    return res.status(500).json({msg:"somthing went wrong , please try again"})
}

module.exports = errorHandlerMiddleware