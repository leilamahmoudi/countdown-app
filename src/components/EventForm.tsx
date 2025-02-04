import React, { useState, FC } from "react";

interface Props {
  eventName: string;
  endDate: string;
  setEventName: React.Dispatch<React.SetStateAction<string>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
}

const EventForm: FC<Props> = ({
  eventName,
  endDate,
  setEventName,
  setEndDate,
}) => {
  const [error, setError] = useState<string>("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = e.target.value;

    const parsedEndDate = new Date(newEndDate);
    if (parsedEndDate <= new Date()) {
      setError("Please enter a future end date.");
      return;
    }

    setError("");
    setEndDate(newEndDate);
    localStorage.setItem("endDate", newEndDate);
  };

  const handleEventNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const eventName = e.target.value;
    setEventName(eventName);

    localStorage.setItem("event", eventName);
  };

  return (
    <>
      <div className="form-container">
        <form>
          <div className="input-group">
            <label htmlFor="eventName">Title</label>
            <input
              id="eventName"
              type="text"
              value={eventName}
              onChange={handleEventNameChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="endDate">Date</label>
            <input
              id="endDate"
              type="datetime-local"
              value={endDate}
              onChange={handleDateChange}
            />
          </div>
        </form>
      </div>
      {error && <p className="error">{error}</p>}
    </>
  );
};

export default EventForm;
