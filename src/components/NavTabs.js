import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function NavTabs() {
  return (

    <ul className="nav navbar-dark fixed-top bg-dark d-flex justify-content-center text-white">
      <li className="nav-item">
        <Link className="nav-link text-white" to="/dashboard">
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/invoice">
          Invoices
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/schedule">
          Schedule
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;