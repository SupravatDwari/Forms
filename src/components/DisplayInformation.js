import React from 'react';

const DisplayInformation = ({ values }) => {
  return (
    <div>
      <h2>Form Data:</h2>
      <p>First Name: {values.firstname}</p>
      <p>Last Name: {values.lastname}</p>
      <p>Email Address: {values.emailAddress}</p>
      <p>Birthday: {values.birthday}</p>
      <p>Age: {values.age}</p>
      <p>Address: {values.address}</p>
    </div>
  );
};

export default DisplayInformation;
