import React from "react";
import Button from "../Button/Button";
import { LuClipboard } from "react-icons/lu";
import "./Appointment.css";

function Appointment() {
  const cd = new Date();
  const fd = cd.toDateString();
  const tm = cd.toLocaleTimeString(); 
  return (
    <div>
      <div className="appointment-card">
        <div className="top-box">
          <div className="app-list">
            <ul>
              <li className="blue">Upcoming appointment</li>
              <li>Past appointment</li>
              <li>Medical records</li>
            </ul>
          </div>
          <div className="app-btn">
            <button className="btn btn-primary">Add appointment</button>
          </div>
        </div>
        <div className="bottom-box">
          <div className="rowone">
            <div className="col-md-2">
              <div>
                <h1>{fd}</h1>
              </div>
              <div>
                <h6>{tm}</h6>
              </div>
            </div>
            <div className="col-md-2">
              <div>
                <h3>Type</h3>
              </div>
              <div>
                <h4>Dr. Lorem Ch</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div>
                <h3>Doctor</h3>
              </div>
              <div>
                <h4>Dr. Lorem Ch</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div>
                <h3>Nurse</h3>
              </div>
              <div>
                <h4>Jessica Mauboy</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <LuClipboard size={"1.3rem"} color="royalblue" />
              </div>
              <div className="blue">Notes</div>
            </div>
          </div>
          <div className="rowone">
            <div className="col-md-2">
              <div>
                <h1>{fd}</h1>
              </div>
              <div>
                <h6>{tm}</h6>
              </div>
            </div>
            <div className="col-md-2">
              <div>Type</div>
              <div>
                <h4>Dr. Lorem Ch</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div>Doctor</div>
              <div>
                <h4>Consultation</h4>
              </div>
            </div>
            <div className="col-md-2">
              <div>Nurse</div>
              <div>
                <h4>Jessica Mauboy</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <LuClipboard size={"1.3rem"} color="royalblue" />
              </div>
              <div className="blue">Notes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
