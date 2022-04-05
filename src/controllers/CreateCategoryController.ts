import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient"

export class CreateCategoryController {
  async handle(req: Request, resp: Response) {
    const { name } = req.body

    const category = await prismaClient.category.create({
      data: { name }
    })

    return resp.json(category)
  }
}