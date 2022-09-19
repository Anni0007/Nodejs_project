const CustomAPIError = require("../errors/custom-error");
const jwt = require('jsonwebtoken')
const login = async (req,res)=>{
    const{ username, password} = req.body

    console.log(username, password);

    if(!username || !password) {
        throw new CustomAPIError('Provide email and password', 400)
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET,{expiresIn:'1d'})

    res.status(200).json({msg:'user sign up', token})
}

const dashboard = async (req,res)=>{
    const randomNumber = Math.floor(Math.random()*100)
    console.log(req.user);
    res.status(200).json({msg:`Hello ,${req.user}`, 
    secret:`Here is your authorized data random number is ${randomNumber}`})
}

module.exports = {
    login, dashboard
}