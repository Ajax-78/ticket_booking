import React, {useEffect, useState } from "react";
import EventList from "./EventList";
import data from "./data.json"

const App = () => {
  const [events, setEvents] = useState([]); 
  const [loading, setLoading] = useState(true); 

  
  console.log(events);
  
  useEffect(() => {
    
        setEvents(data);
        setLoading(false);
    
  }, []);

  if (loading) {
    return <div>Loading events...</div>;
  }

  return (
    <div className="app">
      <h1>Events in Sydney, Australia</h1>
      <EventList events={events} />
    </div>
  );
};

export default App;