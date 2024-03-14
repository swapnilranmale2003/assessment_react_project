// Profile.jsx

import React from "react";
import CountUp from "react-countup";
import { FaUserAlt } from "react-icons/fa";
import "./Profile.css";
import Button from "../Button/Button";

function Profile() {
  return (
    <div>
      <div className="card">
        <div className="row">
          <div className="col-md-6 left">
            <div className="profile">
              <FaUserAlt size={"4rem"} />
            </div>
            <div className="desc">
              <h1>Lorem, ipsum</h1>
              <p>example1234@gmail.com</p>
            </div>
            <h1 className="ap-title">Appointments</h1>
            <div className="appointments">
              <div className="past">
                <h1 className="your-heading">
                  <CountUp end={5} duration={10} />
                </h1>
                <p className="title-post">Past</p>
              </div>
              <div className="upcoming">
                <h1 className="your-heading">
                  <CountUp end={2} duration={10} />
                </h1>
                <p className="title-post">Upcoming</p>
              </div>
            </div>
            <div className="send-msg-btn">
              <Button name ="Send Mesage"/>
            </div>
          </div>
          <div className="col-md-6 right">
            <div className="user-details">
                <div className="firstsection">
                    <div className="gender">
                        <label htmlFor="">Gender</label> <br />
                        <input type="text" name="" id="" placeholder="Female" />
                    </div>
                    <div className="birthday">
                        <label htmlFor="">Birthday</label> <br />
                        <input type="date" name="" id="" placeholder="Oct 25, 1992" />
                    </div>
                </div>
                <div className="firstsection">
                    <div className="phone-number">
                        <label htmlFor="">Phone number</label> <br />
                        <input type="mobile" name="" id="" value={"111-222"}/>
                    </div>
                    <div className="address">
                        <label htmlFor="">Address</label> <br />
                        <input type="text" name="" id="" value={"Nashik"} />
                    </div>
                </div>
                <div className="firstsection">
                    <div className="city">
                        <label htmlFor="">City</label> <br />
                        <input type="text" name="" id="" value={"Kharkiv"} />
                    </div>
                    <div className="zip">
                        <label htmlFor="">Zip code</label> <br />
                        <input type="number" name="" id="" value={"423107"}/>
                    </div>
                </div>
                <div className="firstsection">
                    <div className="regester">
                        <label htmlFor="">Registration date</label> <br />
                        <input type="date" name="" id="" />
                    </div>
                    <div className="birthday">
                        <label htmlFor="">Member status</label> <br />
                        <input type="text" name="" id="" value={"Active member"} />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
