import React from "react";
import EventItem from "./EventItem";

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      {events.length > 0 ? (
        events.map((event) => <EventItem key={event.id} event={event} />)
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
};

export default EventList;