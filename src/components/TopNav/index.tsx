import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import "./style.css";

const TopNav: React.FC = () => {
  const [username, setusername] = useState("");
  const [user, setuser] = useState({});
  let navigate = useNavigate();
  const [modal, setmodal] = useState(false);
  const controller = new AbortController();

  return (
    <div className="nav px-3 bg-white d-flex align-items-center justify-content-between w-100 ">
      <div className="upply-name pt-2 d-flex align-items-center">
        <div
          style={{
            fontWeight: "600",
          }}
        >
          Hello,
        </div>
      </div>
      <div className="nav-right d-flex align-items-center">
        {modal && (
          <div className="auth-option__modal py-2 bg-white rounded-2 p-2 shadow-sm animate__animated animate__fadeInUp">
            <div className="d-flex">
              <div className="d-flex align-items-center justify-content-center">
                {/* <FiLogOut size={14} color={color.red} /> */}
              </div>
              <div className="mx-2">Logout</div>
            </div>
          </div>
        )}
        <div
          className="profile-icon shadow-sm d-flex align-items-center justify-content-center"
          style={{}}
        >
          <div className="text-white"></div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
