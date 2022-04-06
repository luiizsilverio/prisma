import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateProductV2Controller } from "./controllers/CreateProductV2Controller";
import { FindProductController } from "./controllers/FindProductController";
import { FindCategoryController } from "./controllers/FindCategoryController";

const router = Router();

const createProduct = new CreateProductController()
const createCategory = new CreateCategoryController()
const createProductCategory = new CreateProductCategoryController()
const createProductV2 = new CreateProductV2Controller()
const findProduct = new FindProductController()
const findCategory = new FindCategoryController()

router.post("/product", createProduct.handle)
router.post("/category", createCategory.handle)
router.post("/productCategory", createProductCategory.handle)
router.post("/product2", createProductV2.handle)
router.get("/product/:id", findProduct.handle)
router.get("/category/:id", findCategory.handle)

export { router }
