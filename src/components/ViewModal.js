import React from 'react';

const ViewModal = ({ data, onClose }) => {
  return (
    <div className="modal">
      <h3>View {data.type}</h3>
      {data.type === 'patients' && (
        <div>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Age:</strong> {data.age}</p>
          <p><strong>Gender:</strong> {data.gender}</p>
          <p><strong>Address:</strong> {data.address}</p>
        </div>
      )}
      {data.type === 'medicines' && (
        <div>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Description:</strong> {data.description}</p>
          <p><strong>Price:</strong> {data.price}</p>
        </div>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ViewModal;
