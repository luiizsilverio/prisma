import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient"

export class CreateProductCategoryController {
  async handle(req: Request, resp: Response) {
    const { id_product, id_category } = req.body

    const productCategory = await prismaClient.productCategory.create({
      data: {
        id_product,
        id_category
      }
    })

    return resp.json(productCategory)
  }
}