import { Router } from "express";
import { MessageController } from "./controllers/MessageController";
import { SettingsController } from "./controllers/SettingsController";
import { UserController } from "./controllers/UserController";

const router = Router();

const settingsController = new SettingsController();
const userController = new UserController();
const messageController = new MessageController();

router.post("/settings", settingsController.create);
router.get("/settings/:username", settingsController.findByUsername);
router.put("/settings/:username", settingsController.update);

router.post("/users", userController.create);
router.get("/users", userController.getAll);

router.post("/messages", messageController.create);
router.get("/messages/:id", messageController.showByUser);

export { router };