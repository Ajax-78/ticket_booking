import React, { useState } from "react";
import EmailForm from "./EmailForm";
import './App.css'

const EventItem = ({ event }) => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleGetTickets = () => {
    setShowEmailForm(true);
  };

  const handleEmailSubmit = (email) => {
    console.log("Email submitted:", email);
   
    window.location.href = event.ticketUrl;
  };

  console.log(event.imageUrl)
  return (
    <div className="event-item">
      <img src={event.imageUrl}  alt={event.name} className="event-image" />
      <div className="event-details">
        <h2>{event.name}</h2>
        <p>
          <strong>Date:</strong> {event.date}
        </p>
        <p>
          <strong>Time:</strong> {event.time}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
        <p>{event.description}</p>
        <button onClick={handleGetTickets} className="get-tickets-btn">
          GET TICKETS
        </button>
      </div>
      {showEmailForm && (
        <EmailForm onSubmit={handleEmailSubmit} onCancel={() => setShowEmailForm(false)} />
      )}
    </div>
  );
};

export default EventItem;