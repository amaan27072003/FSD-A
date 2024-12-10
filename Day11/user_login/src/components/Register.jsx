import React, { useState } from 'react';
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = ({ regData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const data = { name, email, Password };

  const handlereg = (e) => {
    e.preventDefault();
    alert('Success');
    regData(data);
  };

  return (
    <div className="register-container">
      <form className="register-form">
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button className="btn btn-primary" onClick={handlereg}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;