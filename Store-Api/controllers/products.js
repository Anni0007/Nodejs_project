const product = require("../models/product")

const getAllProducts = async (req,res)=> {
    // res.status(200).json({msg:"get all products"})
    const {feature, company, name, sort} = req.query
    const queryObject = {}

    if(feature   ){
        queryObject.feature = feature === 'true' ? true : false
    }

    if(company){
        queryObject.company = company
    }

    if(name){
        queryObject.name = {$regex:name, $options:'i'}
    }
    let result = product.find(queryObject)
    if(sort){
        const sortList = sort.split(',').join('')
        result = result.sort(sortList)
    } else{
        result.sort('createdAt')
    }

    const products = await result
    res.status(200).json({products, nbHits:products.length})
}

const getAllProductStatic = async (req,res)=> {
    const query = req.query

    const products = await product.find({}).select('name price')
    res.status(200).json({products, nbHits:products.length})
}

module.exports = {getAllProducts, getAllProductStatic}