import { useSelector } from 'react-redux';

const VisitorProfile = () => {
  const visitorId = useSelector((state) => state.visitors.selectedVisitorId);
  const visitor = useSelector((state) =>
    state.visitors.list.find((v) => v.id === visitorId)
  );

  return (
    <div style={{ width: '20%', padding: '10px' }}>
      <h3>Visitor Profile</h3>
      {visitor ? (
        <div>
          <p><strong>Name:</strong> {visitor.name}</p>
          <p><strong>Email:</strong> {visitor.email}</p>
        </div>
      ) : (
        <p>No visitor selected</p>
      )}
    </div>
  );
};

export default VisitorProfile;
