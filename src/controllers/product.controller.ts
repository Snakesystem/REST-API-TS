import { Request, Response } from "express"
import { createProductValidation } from "../validations/product.validation"
import { logger } from "../utils/loger";

export const createProduct = (req: Request, res: Response) => {
    const { error, value } = createProductValidation(req.body)

    if(error) {
        logger.error(`ERR Create product = ${error.details[0].message}`);
        return res.status(400).send({ status: false, statusCode: 400, message: error.details[0].message, data: {} })
    }
    logger.info("Success add new product")
    return res.status(200).send({ status: true, statusCode: 200, data: value, message: "Add product succesfully" })
}

export const getProduct = (req: Request, res: Response) => {
    const productcs = [
        {name: "Sepatu", price: 200000},
        {name: "Kaos", price: 100000},
    ]

    // filter untuk get 1 data
    const { params: { name } } = req

    if(name) {
        const filterProduct = productcs.filter((product) => {
            if(product.name === name) {
                return product
            }
        })

        if(filterProduct.length === 0) {
            logger.info(`Data not found`)
            return res.status(404).send({status: false, statusCode: 404, data: {}})
        }

        logger.info(`Succes get product name ${name}`)
        return res.status(200).send({status: true, statusCode: 200, data: filterProduct[0]})
    }

    // jika tidak ada filter maka akan menampilkan semua data
    logger.info("Succes get product data")
    return res.status(200).send({status: true, statusCode: 200, data: productcs})
}