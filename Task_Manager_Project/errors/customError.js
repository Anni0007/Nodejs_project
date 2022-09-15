class CustomeAPIErrror extends Error {
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg,statusCode) =>{
    return new CustomeAPIErrror(msg, statusCode)
}

module.exports = {createCustomError, CustomeAPIErrror}