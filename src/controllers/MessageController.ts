import { Request, Response } from "express";
import { Message } from "../entities/Message";
import { MessageService } from "../services/MessageService";

class MessageController {

  create(request: Request, response: Response) {
    const service = new MessageService();
    service.create(request.body)
      .then((message: Message) => response.json(message))
      .catch((err) => response.status(400).json({ message: err.message }));
  }

  showByUser(request: Request, response: Response) {
    const service = new MessageService();
    const { id } = request.params;
    service.listByUser(id)
      .then((messages: Message[]) => response.json(messages))
      .catch((err) => response.status(400).json({ message: err.message }));
  }

}

export { MessageController };
