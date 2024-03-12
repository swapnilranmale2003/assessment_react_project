import React from "react";
import Button from "../Button/Button";
import { FiUser } from "react-icons/fi";

import "./Notes.css";
function Notes() {
  return (
    <div>
      <div className="notes-card">
        <div className="notes-head">
          <div className="note-title">
            <h1>Notes</h1>
          </div>
          <div className="see-all">
          <h1> <a href="">See all</a></h1>
          </div>
        </div>
        <div className="notes-hero">
          <div className="parahraph">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              hic!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="notes-btn">
            <Button name="Save note" />
          </div>
        </div>

        <div className="notes-bottom">
          <div className="current-notes">
            <h1>Note 1</h1>
          </div>
          <div className="notes-user">
            <div className="patient-name">
              <p>
                <FiUser size={"1.5rem"} color="royalblue"/>
              </p>
              <p>Dr. Lorem, ipsum dolor.</p>
            </div>
            <div className="patient-date">
             <p>20 Nov 2018</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
