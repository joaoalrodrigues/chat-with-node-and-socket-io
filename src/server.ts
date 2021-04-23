import { httpServer } from "./app";
import "./websocket/client";
import "./websocket/admin";

const PORT = 3333;
httpServer.listen(PORT, () => console.log(`Server is running on port ${PORT}`));