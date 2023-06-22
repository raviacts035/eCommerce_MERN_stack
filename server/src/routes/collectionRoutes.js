import { Router } from "express";
import { isLogedIn, authorized } from "../middlewares/authMiddleware.js";
import AuthRoles from "../utils/authRoles.js";
import { createCollection, getCollection, updateCollection, deleteCollection} from "../controllers/collectionControl.js";

const collectionRoutes= Router();

collectionRoutes.get("/", getCollection);
collectionRoutes.post("/create/new", createCollection);
collectionRoutes.post("/update/:id",  updateCollection);
collectionRoutes.delete("/delete/:id", deleteCollection);


export default collectionRoutes;