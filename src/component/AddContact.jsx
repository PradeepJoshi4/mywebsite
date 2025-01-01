import React, { useState } from 'react';

const AddContact = ({ addContact , contactLength }) => {
  // State to store form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("All fields are mandatory");
      return;
    }

    // Create new contact object
    const newContact = {
      id: contactLength + 1, 
      name,
      email
    };

    // Call the addContact function passed from App.js
    addContact(newContact);

    // Clear the form
    setName('');
    setEmail('');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-10">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-md-5">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-label="Name"
                />
              </div>
              <div className="col-12 col-md-5">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-12 col-md-2 d-flex justify-content-center align-items-center">
                <button className="btn btn-primary btn-sm" type="submit">Add</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
