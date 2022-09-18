const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'product name is necessary']
    },
    price: {
        type:Number,
        required:[true, 'product  oprice is necessary']
    },
    feature:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    ceeatedAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:['ikea','liddy','caressa','marcos']},
            message:'{VALUE} is not supported '
    }
})

module.exports = mongoose.model('Product', productSchema)