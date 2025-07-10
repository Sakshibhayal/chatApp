import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { addVisitor } from '../redux/visitorSlice';
import { addMessage } from '../redux/chatsSlice';
import { incrementUnread } from '../redux/uiSlice';

const socket = io('https://chatappserver-kv1u.onrender.com');

const useSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    socket.on('new-visitor', (visitor) => {
      dispatch(addVisitor(visitor));
    });

    socket.on('new-message', (message) => {
      dispatch(addMessage(message));
      dispatch(incrementUnread(message.visitorId));
    });
  }, [dispatch]);
};

export default useSocket;
