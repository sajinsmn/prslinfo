import React from 'react';

const UserDetails = () => {
  // Store the details in a JavaScript object
  const details = {
    name: 'Sajin Simon',
    rollNo: 'CB.SC.P2CSE25031',
    address: 'XYZ, CB, K'
  };

  // Some basic styling to make it look like a card
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px',
    maxWidth: '300px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif'
  };

  const headingStyle = {
    borderBottom: '2px solid #eee',
    paddingBottom: '10px'
  };
  
  return (
    <div style={cardStyle}>
      <h2 style={headingStyle}>📄 My Details</h2>
      <p><strong>Name:</strong> {details.name}</p>
      <p><strong>Roll No:</strong> {details.rollNo}</p>
      <p><strong>Address:</strong> {details.address}</p>
    </div>
  );
};

export default UserDetails;