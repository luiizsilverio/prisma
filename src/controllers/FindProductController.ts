import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient"

export class FindProductController {
  async handle(req: Request, resp: Response) {
    const { id } = req.params

    const product = await prismaClient.product.findFirst({
      where: {
        id,
      },
      include: {
        ProductCategory: true
      }
    })

    return resp.json(product)
  }
}