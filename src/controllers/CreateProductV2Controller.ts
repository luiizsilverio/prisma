import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient"

export class CreateProductV2Controller {
  async handle(req: Request, resp: Response) {
    const { name, bar_code, price, id_category } = req.body

    // inclui o produto na categoria correta
    const product = await prismaClient.productCategory.create({
      data: {
        product: {
          create: {
            name,
            bar_code,
            price,
          }
        },
        category: {
          connect: {
            id: id_category
          }
        }
      }
    })

    return resp.json(product)
  }
}