import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import "./Header.css";
function Header() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();

  return (
    <header>
      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-md-4 search-bar">
            <input type="text" name="" id="" className="form-control" placeholder="Search..." />
            <CiSearch color="white" size={"2rem"} className="search-icon" />
          </div>
          <div className="col-md-2 header-date">{formattedDate}</div>
          <div className="col-md-6 header-right">
            <div className="bell">
            <FaRegBell  />
            </div>
            <div className="mail">
            <CiMail color="white" />
            </div>
            <div className="profile">
            <img src="assets/profile.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
