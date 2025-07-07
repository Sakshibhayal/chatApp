import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { addVisitor } from '../redux/visitorSlice';
import { addMessage } from '../redux/chatsSlice';
import { incrementUnread } from '../redux/uiSlice';

const socket = io('http://localhost:4000');

const useSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Connecting to socket server...');
    
    socket.on('connect', () => {
      console.log('Socket connected:', socket.id);
    });

    socket.on('new-visitor', (visitor) => {
      console.log(' Visitor received:', visitor);
      dispatch(addVisitor(visitor));
    });

    socket.on('new-message', (message) => {
      console.log('Message received:', message);
      dispatch(addMessage(message));
      dispatch(incrementUnread(message.visitorId));
    });
  }, [dispatch]);
};

export default useSocket;
