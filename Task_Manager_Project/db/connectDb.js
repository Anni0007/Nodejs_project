const mongoose = require('mongoose')

const connection = (url)=> {
    mongoose.connect(url)
}
// mongoose.connect(connectionString)
// .then(()=>console.log("connected to mongodb"))
// .catch((err) => console.log(err))
module.exports = connection