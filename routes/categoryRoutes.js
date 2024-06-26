const express = require('express');
import { requireSignIn, isAdmin } from "./../middlewares/authMiddleware.js";
import {
    categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const app = express();
const router = express.Router();

//routes

router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController,
);

//get All category

router.get('/get-category', categoryController)

// single category

router.get('/single-category/:slug', singleCategoryController)


// Delete Category

router.delete('/delete-category/:id', requireSignIn , isAdmin , deleteCategoryController)


export default router;
