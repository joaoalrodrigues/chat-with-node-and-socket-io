import { Request, Response } from "express";
import { UpdateResult } from "typeorm";
import { Settings } from "../entities/Settings";
import { SettingsService } from "../services/SettingsService";

class SettingsController {

  create(request: Request, response: Response) {
    const { chat, username } = request.body;
    const service = new SettingsService();

    service.create(chat, username)
      .then((settings: Settings) => response.json(settings))
      .catch((err) => response.status(400).json({ message: err.message }));
  }

  findByUsername(request: Request, response: Response) {
    const { username } = request.params;
    const service = new SettingsService();

    service.findByUsername(username)
      .then((settings: Settings) => response.json(settings))
      .catch((err) => response.status(400).json({ message: err.message }));;
  }

  update(request: Request, response: Response) {
    const { username } = request.params;
    const { chat } = request.body;
    const service = new SettingsService();

    service.update(username, chat)
      .then((updateResult: UpdateResult) => response.json(updateResult))
      .catch((err) => response.status(400).json({ message: err.message }));;
  }
}

export { SettingsController };
