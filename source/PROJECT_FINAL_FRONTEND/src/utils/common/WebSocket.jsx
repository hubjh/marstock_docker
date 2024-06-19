import { WEB_SOCKET } from "./Common";

const WebSocketComponent = (roomId, type) => {
  const socket = new WebSocket(
    `${WEB_SOCKET}?room=${roomId}&type=${type}`
    // `ws://ws/marstock?room=${roomId}&type=${type}`
  );
  console.log(socket.url);

  socket.onopen = () => {
    console.log("WebSocket connected");
  };

  socket.onmessage = (event) => {
    const message = event.data;
    // console.log(message);
  };

  socket.onclose = () => {
    console.log("WebSocket closed");
  };

  // WebSocket 객체 반환
  return socket;
};

export default WebSocketComponent;
