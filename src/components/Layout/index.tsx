import React from "react";
import SideNav from "../SideNav";
import TopNav from "../TopNav";
import "./style.css";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="d-flex align-items-start main-cover w-100">
      <div className="left-container d-flex align-items-start justify-content-center">
        <SideNav />
      </div>
      <div className="right-container w-100">
        {/* <TopNav /> */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
