import React from 'react';

const BookingForm = () => {
  return (
    <div className="booking-form">
      {/* Start Time */}
      <div className="form-field">
        <label htmlFor="startTime" className="form-label">
          ⏰ Start Time <span className="required">*</span>
        </label>
        <select id="startTime" name="startTime" required className="styled-select">
          <option value="" disabled hidden>Start Time</option>
          {[
            '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
            '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
            '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'
          ].map(time => <option key={time} value={time}>{time}</option>)}
        </select>
      </div>

      {/* Departure Location */}
      <div className="form-field">
        <label htmlFor="departureLocation" className="form-label">
          📍 Departure Location <span className="required">*</span>
        </label>
        <select id="departureLocation" name="departureLocation" required className="styled-select">
          <option value="" disabled hidden>Choose Location</option>
          <option value="North Miami / Broward">North Miami / Broward</option>
          <option value="South Miami">South Miami</option>
        </select>
      </div>

      {/* Party Size */}
      <div className="form-field">
        <label htmlFor="partySize" className="form-label">
          👥 Party Size <span className="required">*</span>
        </label>
        <select id="partySize" name="partySize" required className="styled-select">
          <option value="" disabled hidden>Party Size</option>
          <option value="Up to 9 guests">Up to 9 guests aboard</option>
          <option value="Up to 11 guests">Up to 11 guests aboard</option>
          <option value="Up to 13 guests">Up to 13 guests aboard</option>
          <option value="13+ guests – special event">13+ guests – special event</option>
        </select>
      </div>

      {/* Optional Add-ons */}
      <div className="form-field">
        <label htmlFor="addOns" className="form-label">🌟 Optional Add-ons</label>
        <textarea id="addOns" name="addOns" className="styled-textarea"
          placeholder="Champagne upgrade, photographer, Jet Ski, sunset drone session, etc." />
      </div>
    </div>
  );
};

export default BookingForm;
