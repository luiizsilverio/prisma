import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient"

export class FindCategoryController {
  async handle(req: Request, resp: Response) {
    const { id } = req.params

    const category = await prismaClient.category.findFirst({
      where: { id },
      include: {
        ProductCategory: true
      }
    })

    return resp.json(category)
  }
}