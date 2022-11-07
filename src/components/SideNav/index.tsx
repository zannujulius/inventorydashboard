import React, { Component, useState } from "react";
import "./style.css";
import { MdDashboard } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { GrServers } from "react-icons/gr";
import {
  IoHardwareChipSharp,
  IoSettingsSharp,
  IoLogOut,
} from "react-icons/io5";
import { TbMessageShare } from "react-icons/tb";
import { GiMicrochip } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { RiBarChartGroupedFill, RiNotification2Fill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { color } from "../../constant/color";
import { MdInventory, MdSettings, MdAnalytics } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";

const SideNav: React.FC = () => {
  const [active, setActive] = useState(false);
  const [showdd, setshowdd] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const colorPrint = (item: string) => {
    return location.pathname.includes(item) ? color.primary : "#b1b1b1";
  };

  const colorBorder = (item: string) => {
    return location.pathname.includes(item) ? `1px solid ${color.primary}` : "";
  };

  return (
    <div className="side-nav">
      <div className="side-nav__brand mb-4 w-100 d-flex align-items-center justify-content-center">
        <div
          className="shadow-sm"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: `url("https://www.yiiframework.com/image/design/logo/yii3_sign.png")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="side-nav_items">
        <Link
          to="/allcompanies"
          className="d-flex my-5 px-3 py-2 side-nav__link-cover"
          style={{
            borderRight: colorBorder("/dashboard"),
          }}
        >
          <div
            className="side-icon mx-2 d-flex align-items-center justify-content-center"
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: "#fff",
            }}
          >
            <MdDashboard size={24} color={colorPrint("/dashboard")} />
          </div>
          <div
            className="side-nav__link  w-75 d-none d-block text-decoration-none"
            style={{
              background: colorPrint(location.pathname),
              color:
                location.pathname == "/allcompanies" ? color.white : "#01377f",
            }}
          >
            Dashboard
          </div>
        </Link>
        <Link
          to="/allbranches"
          className="d-flex my-5 px-3 py-2 side-nav__link-cover"
          style={{
            borderRight: colorBorder("/settings"),
          }}
        >
          <div
            className="side-icon mx-2 d-flex align-items-center justify-content-center"
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: "#fff",
            }}
          >
            <MdInventory size={24} color={colorPrint("/allbranches")} />
          </div>
          <div
            className="side-nav__link  w-75 d-none d-block text-decoration-none"
            style={{
              background: colorPrint("/allbranches"),
              color: colorPrint("/allbranches"),
            }}
          >
            Inventory
          </div>
        </Link>
        <Link
          to="/analytics"
          className="d-flex my-5 px-3 py-2 side-nav__link-cover"
          style={{
            borderRight: colorBorder("/analytics"),
          }}
        >
          <div
            className="side-icon mx-2 d-flex align-items-center justify-content-center"
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: "#fff",
            }}
          >
            <MdSettings size={24} color={colorPrint("/analytics")} />
          </div>
          <div
            className="side-nav__link w-75 d-none d-block text-decoration-none"
            style={{
              background: colorPrint("/analytics"),
              color:
                location.pathname == "/analytics" ? color.white : "#01377f",
            }}
          >
            Analytics
          </div>
        </Link>
        <Link
          to="/settings"
          className="d-flex my-5 px-3 py-2 side-nav__link-cover"
          style={{
            borderRight: colorBorder("/settings"),
          }}
        >
          <div
            className="side-icon mx-2 d-flex align-items-center justify-content-center"
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: "#fff",
            }}
          >
            <MdAnalytics size={24} color={colorPrint("/settings")} />
          </div>
          <div
            className="side-nav__link  w-75 d-none d-block text-decoration-none"
            style={{
              background: colorPrint(location.pathname),
              color: location.pathname == "/settings" ? color.white : "#01377f",
            }}
          >
            Settings
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
