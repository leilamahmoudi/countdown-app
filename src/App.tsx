import React, { useEffect, useState } from "react";
import EventForm from "./components/EventForm";
import Countdown from "./components/Countdown";
import FitText from "./components/FitText";
import "./App.css";

const App: React.FC = () => {
  const [eventName, setEventName] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  useEffect(() => {
    const savedEvent = localStorage.getItem("event");
    const savedEndDate = localStorage.getItem("endDate");

    if (savedEvent && savedEndDate) {
      setEventName(savedEvent);
      setEndDate(savedEndDate);
    }
  }, []);

  return (
    <div className="container">
      <div className="countdown-container">
        {eventName && (
          <div className="event-name">
            <FitText text={`Time to ${eventName}`} />
          </div>
        )}
        {endDate && (
          <div className="countdown">
            <Countdown endDate={endDate} />
          </div>
        )}
      </div>
      <EventForm
        eventName={eventName}
        endDate={endDate}
        setEndDate={setEndDate}
        setEventName={setEventName}
      />
    </div>
  );
};

export default App;
