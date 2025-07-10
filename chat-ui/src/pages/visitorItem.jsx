import React from 'react';

function VisitorItem({ visitor, isSelected, unreadCount, onSelect }) {
  const initials = visitor.name.split(' ').map(n => n[0]).join('').toUpperCase();
  return (
    <li
      tabIndex="0"
      role="button"
      onClick={() => onSelect(visitor.id)}
      onKeyDown={e => e.key === 'Enter' && onSelect(visitor.id)}
      className={`visitor-item ${isSelected ? 'selected' : ''}`}
    >
      <div className="avatar">{visitor.avatar || initials}</div>
      <div className="info">
        <div className="name">{visitor.name}</div>
        <div className="email">{visitor.email}</div>
      </div>
      {unreadCount > 0 && (
        <span className="badge">{unreadCount}</span>
      )}
    </li>
  );
}

export default VisitorItem;
