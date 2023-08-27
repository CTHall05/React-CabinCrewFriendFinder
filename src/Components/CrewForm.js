import React, { useState } from 'react';

function CrewForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nationality: '',
    staffNumber: '',
    airline: '',
    joiningDate: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Your Crew Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Nationality:</label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Staff Number</label>
          <input
            type="text"
            name="nationality"
            value={formData.staffNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Airline:</label>
          <input
            type="text"
            name="airline"
            value={formData.airline}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Year Joined:</label>
          <input
            type="text"
            name="yearJoined"
            value={formData.yearJoined}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}

export default CrewForm;
