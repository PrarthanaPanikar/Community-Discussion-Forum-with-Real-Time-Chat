import { io } from 'socket.io-client';
export function createSocket(token){
  return io(process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000', { auth: { token } });
}
