import { useSelector, useDispatch } from 'react-redux';
import { selectVisitor } from '../redux/visitorSlice';
import { clearUnread } from '../redux/uiSlice';

const VisitorList = () => {
  const visitors = useSelector((state) => state.visitors.list);
  const selectedVisitorId = useSelector((state) => state.visitors.selectedVisitorId);
  const unread = useSelector((state) => state.ui.unreadMessages);
  const dispatch = useDispatch();

  const handleSelect = (id) => {
    dispatch(selectVisitor(id));
    dispatch(clearUnread(id));
  };

  return (
    <div style={{ width: '20%', borderRight: '1px solid #ccc', padding: '10px' }}>
      <h3>Visitors</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {visitors.map((v) => (
          <li
            key={v.id}
            onClick={() => handleSelect(v.id)}
            style={{
              cursor: 'pointer',
              padding: '8px',
              marginBottom: '5px',
              background: v.id === selectedVisitorId ? '#eee' : '#f9f9f9',
              borderRadius: '5px',
              position: 'relative',
            }}
          >
            {v.name}
            {unread[v.id] && (
              <span
                style={{
                  background: 'red',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '2px 6px',
                  fontSize: '12px',
                  position: 'absolute',
                  right: 10,
                  top: 10,
                }}
              >
                {unread[v.id]}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisitorList;
