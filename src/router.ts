import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();
const listUserSenderComplimentsController = new ListUserSenderComplimentsController();
const listTagsControler = new ListTagsController();
const userListController = new ListUserController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticate, ensureAdmin, createTagController.handle);
router.post("/session", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticate, createComplimentController.handle);



router.get("/users/compliments/sender", ensureAuthenticate, listUserReceiverComplimentsController.handle);
router.get("/users/compliments/receiver", ensureAuthenticate, listUserSenderComplimentsController.handle);
router.get("/tags", ensureAuthenticate, listTagsControler.handle);
router.get("/users", userListController.handle);


export { router };