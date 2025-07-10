import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/visitorProfile.css';

const VisitorProfile = () => {
  const visitorId = useSelector(s => s.visitors.selectedVisitorId);
  const visitor = useSelector(s =>
    s.visitors.list.find(v => v.id === visitorId)
  );

  return (
    <aside className="profile-sidebar">
      <h3 className="profile-header">Visitor Profile</h3>
      {visitor ? (
        <div className="profile-body">
          <div className="avatar-circle">
            {visitor.avatar ? (
              <img src={visitor.avatar} alt="avatar" />
            ) : (
              visitor.name
                .split(' ')
                .map(n => n[0])
                .join('')
                .toUpperCase()
            )}
          </div>
          <div className="info">
            <p><span>Name:</span> {visitor.name}</p>
            <p><span>Email:</span> {visitor.email}</p>
          </div>
        </div>
      ) : (
        <div className="no-data">No visitor selected</div>
      )}
    </aside>
  );
};

export default VisitorProfile;
