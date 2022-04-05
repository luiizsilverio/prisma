import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";

const router = Router();

const createProduct = new CreateProductController()
const createCategory = new CreateCategoryController()
const createProductCategory = new CreateProductCategoryController()

router.post("/product", createProduct.handle)
router.post("/category", createCategory.handle)
router.post("/productCategory", createProductCategory.handle)

export { router }
