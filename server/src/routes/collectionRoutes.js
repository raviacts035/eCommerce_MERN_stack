import { Router } from "express";
import { isLogedIn, authorized } from "../middlewares/authMiddleware.js";
import AuthRoles from "../utils/authRoles.js";
import { createCollection, getCollection, updateCollection, deleteCollection} from "../controllers/collectionControl.js";

const collectionRoutes= Router();

collectionRoutes.get("/", isLogedIn, getCollection);
collectionRoutes.put("/create/new", isLogedIn, authorized(AuthRoles.Admin), createCollection);
collectionRoutes.post("/update/:id", isLogedIn, authorized(AuthRoles.Admin), updateCollection);
collectionRoutes.delete("/delete/:id", isLogedIn, authorized(AuthRoles.Admin), deleteCollection);


export default collectionRoutes;