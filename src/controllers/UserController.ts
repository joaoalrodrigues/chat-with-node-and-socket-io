import { Request, Response } from "express";
import { User } from "../entities/User";
import { UserService } from "../services/UserService";

class UserController {

  getAll(request: Request, response: Response) {
    const service = new UserService();
    service.getAll()
      .then((users: User[]) => response.json(users))
      .catch((err) => response.status(400).json({ message: err.message }));
  }

  create(request: Request, response: Response) {
    const service = new UserService();
    const { email } = request.body;
    service.create(email)
      .then((user: User) => response.json(user))
      .catch((err) => response.status(400).json({ message: err.message }));
  }
}

export { UserController };
