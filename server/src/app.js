import express from "express";
import http from "http";
import SocketIO from "socket.io";

const app = express();
const server = http.createServer(app);
const io = SocketIO(server);
const port = 3001;

const chatState = {
  users: [],
  sentText: [],
  receivedText: [],
};

server.listen(port, () => console.log(`Listening at port: ${port}`));

app.get("/users", (req, res) => {
  res.json({ users });
});

io.on("connection", (socket) => {
  console.log("connection opened");
  socket.on("login", (name) => {
    addUser({ name });
    console.log("all users after", chatState.users);
  });

  socket.on("sendText", (msg) => {
    sendText({ msg });
  });
});

const addUser = ({ name }) => {
  if (!chatState.users.includes(name)) chatState.users.push(name);
  io.emit("setUsers", chatState.users);
};

const sendText = ({ msg }) => {
  chatState.sentText.push(msg);
  io.emit("sentText", msg);
};
