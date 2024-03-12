import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

import "./Header.css";

function Header() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();

  return (
    <header>
      <div className="container-fluid my-2">
        <div className="row justify-content-between ">
         
          <div className="col-md-4 search-bar">
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              placeholder="Search..."
            />
            <CiSearch color="white" size={"2rem"} className="search-icon" />
          </div>
          <div className="col-md-2 header-date">{formattedDate}</div>
 
          <div className="col-md-5 header-right">
            <Tippy placement="left" delay={1000} content={"Notification"}>
              <div className="bell">
                <FaRegBell />
              </div>
            </Tippy>
            <div className="mail">
              <CiMail color="white" />
            </div>
            <Tippy
              placement="center"
              delay={1000}
              arrow={true}
              content={"Mr bean"}
            >
              <div className="profile">
                <img src="assets/profile.jpeg" alt="" />
              </div>
            </Tippy>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
