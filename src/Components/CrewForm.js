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

  const h2Style = {
    backgroundColor: (() => {
      switch (formData.airline) {
        case 'Emirates':
          return 'red';
        case 'Qatar':
          return 'purple';
        case 'Etihad':
          return 'brown';
        default:
          return 'initial';
      }
    })(),
  };

  return (
    <section
      id="crewForm"
      className="CrewForm-Component-Section"
      style={h2Style}
    >
      <h2>Your Crew Data</h2>
      <form onSubmit={handleSubmit} className="CrewForm-Form-Container">
        <div className="form-input-CrewForm">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-input-CrewForm">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-input-CrewForm">
          <label>Nationality</label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-input-CrewForm">
          <label>Staff Number</label>
          <input
            type="text"
            name="nationality"
            value={formData.staffNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-input-CrewForm">
          <label>Airline:</label>
          <select
            name="airline"
            value={formData.airline}
            onChange={handleInputChange}
          >
            <option value="">Select Airline</option>
            <option value="Emirates">Emirates</option>
            <option value="Qatar">Qatar</option>
            <option value="Etihad">Etihad</option>
          </select>
        </div>
        <div className="form-input-CrewForm">
          <label>Year Joined:</label>
          <input
            type="text"
            name="yearJoined"
            value={formData.yearJoined}
            onChange={handleInputChange}
          />
        </div>
        <button className="submitButton">Submit</button>
      </form>
    </section>
  );
}

export default CrewForm;
