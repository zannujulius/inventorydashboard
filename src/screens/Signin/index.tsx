import React, { useEffect, useState } from "react";
import "./style.css";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Signin: React.FC = () => {
  const [eye, seteye] = useState<boolean>(false);
  return (
    <div className="">
      <div className="container-fluid p-0 m-0 auth-container d-flex align-items-center justify-content-center">
        <div className="row d-flex align-items-center justify-content-center w-100">
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 ">
            <div className="auth-form w-100 bg-white shadow-lg rounded-3 px-3 py-5">
              <div className="brand-title text-center pb-2">Business name</div>
              <div className="text-center auth-caption">
                Please login to continue.
              </div>
              <div className="mt-3">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email address"
                  />
                  <div id="emailHelp" className="form-text">
                    Your credentials are sucured.🔏
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <div className="form-control d-flex align-items-center justify-content-between">
                    <input
                      type={eye ? "password" : "text"}
                      className="form-password w-75 h-100"
                      id="exampleInputPassword1"
                      placeholder="****** your password"
                    />
                    <div
                      className="eye-cover"
                      onClick={() => seteye((prev) => !prev)}
                    >
                      {eye ? <VscEyeClosed /> : <VscEye />}
                    </div>
                  </div>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-label" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <Link to="/dashboard" className="w-100 mt-4">
                  <Button loading={false} text={"Sign in"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
