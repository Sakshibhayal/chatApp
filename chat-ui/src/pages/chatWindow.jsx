import { useSelector } from 'react-redux';

const ChatWindow = () => {
  const visitorId = useSelector((state) => state.visitors.selectedVisitorId);
  const messages = useSelector(
    (state) => (visitorId && state.chats.conversations[visitorId]) || []
  );

  return (
    <div style={{ width: '60%', padding: '10px', borderRight: '1px solid #ccc' }}>
      <h3>Chat</h3>
      {visitorId ? (
        <div style={{ height: '400px', overflowY: 'auto' }}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                textAlign: msg.sender === 'agent' ? 'right' : 'left',
                margin: '5px 0',
              }}
            >
              <span
                style={{ 
                  background: msg.sender === 'agent' ? '#dcf8c6' : '#f1f0f0',
                  padding: '8px',
                  borderRadius: '10px',
                  display: 'inline-block',
                  maxWidth: '60%',
                }}
              >
                {msg.content}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p>Select a visitor to start chat</p>
      )}
    </div>
  );
};

export default ChatWindow;
