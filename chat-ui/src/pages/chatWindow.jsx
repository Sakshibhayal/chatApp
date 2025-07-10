// ChatWindow.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage } from '../redux/chatsSlice';
import '../assets/chatWindow.css';

const ChatWindow = () => {
  const visitorId = useSelector(s => s.visitors.selectedVisitorId);
  const messages = useSelector(s => (visitorId && s.chats.conversations[visitorId]) || []);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const chatRef = useRef();

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!visitorId || !input.trim()) return;
    dispatch(sendMessage({ visitorId, content: input }));
    setInput('');
  };

  return (
    <div className="chat-container">
      <h3>Chat</h3>
      {visitorId ? (
        <>
          <div className="messages" ref={chatRef}>
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`message ${msg.sender === 'agent' ? 'agent' : 'visitor'}`}
              >
                <span>{msg.content}</span>
              </div>
            ))}
          </div>
          <div className="input-area">
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              rows={1}
              placeholder="Type a message…"
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </>
      ) : (
        <p className="no-select">Select a visitor to start chat</p>
      )}
    </div>
  );
};

export default ChatWindow;
