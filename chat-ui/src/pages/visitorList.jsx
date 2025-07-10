import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisitor } from '../redux/visitorSlice';
import { clearUnread } from '../redux/uiSlice';
import VisitorItem from './visitorItem';
import '../assets/visitorList.css';

const VisitorList = () => {
  const visitors = useSelector(s => s.visitors.list);
  const selected = useSelector(s => s.visitors.selectedVisitorId);
  const unread = useSelector(s => s.ui.unreadMessages);
  const dispatch = useDispatch();

  const handleSelect = id => {
    dispatch(selectVisitor(id));
    dispatch(clearUnread(id));
  };

  return (
    <div className="visitor-list">
      <h3>Visitors</h3>
      <ul>
        {visitors.map(v => (
          <VisitorItem
            key={v.id}
            visitor={v}
            isSelected={v.id === selected}
            unreadCount={unread[v.id] || 0}
            onSelect={handleSelect}
          />
        ))}
      </ul>
    </div>
  );
};

export default VisitorList;
