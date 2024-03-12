import React from "react";
import "./Appointment.css";
import Button from "../Button/Button";
function Appointment() {
  return (
    <div>
      <div className="appointment-card">
        <div className="apn-header">
          <div className="apn-link">
            <ul>
              <li>Upcoming appointments</li>
              <li>Past appointments</li>
              <li>Medical records</li>
            </ul>
          </div>
          <div className="apn-btn">
            <Button name="Add appointment" />
          </div>
        </div>
        <div className="row-2">
          <div className="dr-information">
            <div className="doctor-one">
                <div className="date">
                    <h1>01 June'20</h1>
                    <p>Time</p>
                </div>
                <div className="dr-type">
                    <h1>Type</h1>
                    <p>Consultation</p>
                </div>
                <div className="dr-name">
                    <h1>Doctor</h1>
                    <p>Dr.Ankit patil</p>
                </div>
                <div className="dr-nurse">
                    <h1>Nurse</h1>
                    <p>Jessica Mauboy</p>
                </div>
                </div>
                <p className="dash"></p>
                <div className="doctor-two">
                <div className="date">
                    <h1>01 June'20</h1>
                    <p>Time</p>
                </div>
                <div className="dr-type">
                    <h1>Type</h1>
                    <p>Consultation</p>
                </div>
                <div className="dr-name">
                    <h1>Doctor</h1>
                    <p>Dr.Ankit patil</p>
                </div>
                <div className="dr-nurse">
                    <h1>Nurse</h1>
                    <p>Jessica Mauboy</p>
                </div>
                </div>
            </div>
          </div>
        </div>
    
    </div>
  );
}

export default Appointment;
