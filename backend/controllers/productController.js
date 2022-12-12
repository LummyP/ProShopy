import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc ***** Fetch all products
// @route **** GET /api/products
// @access *** Public

// This gets all the products and "asyncHandler is used as a substitute to try and catch"

const getProducts = asyncHandler(async (req, res) => {
     // This finds all the product model
     const products = await Product.find({})
     res.json(products)
})

// @desc ***** Fetch single product
// @route **** GET /api/products/:id
// @access *** Public

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

     if(product) {
        res.json(product)
     } else {
        res.status(404)
        throw new Error('Product not found')
     }
})

export {getProducts, getProductById}