import React, { useState } from "react";

const EmailForm = ({ onSubmit, onCancel }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      onSubmit(email);
    }
  };

  return (
    <div className="email-form-overlay">
      <div className="email-form">
        <h3>Enter your email to proceed</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="form-buttons">
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;