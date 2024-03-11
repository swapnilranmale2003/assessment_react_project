import React from "react";
import { IconContext } from "react-icons";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import { LuDollarSign } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { GiSettingsKnobs } from "react-icons/gi";
import { FiUserCheck } from "react-icons/fi";
import { CiCircleAlert } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import "./Dashboard.css";
function Dashboard() {
  return (
    <IconContext.Provider value={{ color: "gray", size: "1.5rem" }}>
      <div className="left-dashboard-medc">
        <div className="one">
          <div className="logo">
            <h1>
              Med<span>C</span>
            </h1>
          </div>
          <div className="panel-list">
            <div className="panel">
              <MdOutlineSpaceDashboard />
              <li>Dashboard</li>
            </div>
            <div className="panel">
              <FiUserCheck />
              <li>Patients</li>
            </div>
            <div className="panel">
              <FiMessageCircle />
              <li>Messages</li>
            </div>
            <div className="panel">
              <LuDollarSign />
              <li>Payments</li>
            </div>
            <div className="panel">
              <CiCalendar />
              <li>Calendar</li>
            </div>
            <div className="panel">
              <GiSettingsKnobs />
              <li>Settings</li>
            </div>
          </div>
        </div>
        <div className="two">
          <div className="dashboard-bottom">
            <div className="help">
              <CiCircleAlert />
              <li>Help</li>
            </div>
            <div className="logout">
              <FiLogOut />
              <li>Log out</li>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Dashboard;
