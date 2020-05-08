import openSocket from "socket.io-client";

class SocketAPI {
  constructor() {
    this.socket = openSocket("http://localhost:3001");
  }

  getSocket = () => this.socket;

  login = ({ name }) => {
    this.socket.emit("login", name);
  };
}

// const urlPrefix = "http://localhost:3001/";

// export const handleResponse = async (res) => {
//   if (!res.ok) {
//     throw await res.json();
//   }
//   return res.json();
// };

// export const test = () =>
//   fetch(`${urlPrefix}`).then((res) => handleResponse(res));

export default new SocketAPI();
