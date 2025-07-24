import React from 'react';

const LogoutButton = ({ onLogout }) => {
  return (
    <div style={{ textAlign: 'right', padding: '10px' }}>
      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
