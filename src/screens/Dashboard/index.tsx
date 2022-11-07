import React, { useState } from "react";
import BranchTable from "../../components/Branch/Table";
import Layout from "../../components/Layout";
import { color } from "../../constant/color";
import { SiMicrogenetics } from "react-icons/si";
import "./style.css";
import { MdLogout } from "react-icons/md";
import TopCards from "../../components/Dashboard/TopCards";
import { DatePicker } from "antd";
import moment from "moment";
import { FaPlus } from "react-icons/fa";
const Dashboard: React.FC = () => {
  const { RangePicker } = DatePicker;
  const [startdate, setstartdate] = useState<string>(
    moment(Date.now()).startOf("day").format("lll")
  );
  const [enddate, setenddate] = useState<string>(
    moment(Date.now()).format("lll")
  );
  return (
    <Layout>
      <div className="container-fluid ">
        <div className="row d-flex align-items-start justify-content-between">
          <div
            className="col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9"
            style={{
              height: "100vh",
              overflowX: "hidden",
              overflowY: "scroll",
            }}
          >
            <div className="row  mt-3 d-flex align-items-center justify-content-between">
              <div className="col-3">
                <div className="">
                  <div
                    className=""
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    ⛅ Good morning Julius
                  </div>
                  <div className="">How are your sales today ?</div>
                </div>
              </div>
              <div className="col-3">
                <div className="">
                  <div
                    className="text-end pb-2"
                    style={{
                      fontSize: 12,
                    }}
                  >
                    Select a date range
                  </div>
                  <div className="">
                    <RangePicker showTime allowClear />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <TopCards
                  title={`Sales made from ${startdate} to ${enddate}.`}
                  value="₦57,439,090.00"
                  type="sales"
                />
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <TopCards
                  title="Total amount of debts."
                  value="₦19,090.00"
                  type="debts"
                />
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <TopCards
                  title="Total number of items in store"
                  value="353,5534,000"
                />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginBottom: 300,
              }}
            >
              <BranchTable />
            </div>
          </div>
          <div
            className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 bg-white shadow-sm mx-0 px-0"
            style={{
              height: "100vh",
            }}
          >
            <div
              className="px-3 py-3"
              style={{
                position: "relative",
              }}
            >
              <div className="logout-cover d-flex align-items-center ">
                <MdLogout color={"#9d9d9d"} />
                <div className="px-2 logout-text">Logout</div>
              </div>
              <div
                className=" d-flex align-items-center justifyg-content-center flex-column pb-3"
                style={{
                  borderBottom: "1px solid #eee",
                }}
              >
                <div
                  className="profile-icon my-3 "
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    border: `2px solid ${color.primary}`,
                  }}
                ></div>

                <div className="profile-name">Zannu julius</div>
                <div className="profile-role">Manager</div>
              </div>

              <div>
                <div
                  className="rounded-4 dshb-card mt-3 p-2 d-flex align-items-center justify-content-between"
                  style={{
                    height: 100,
                  }}
                >
                  <div className="w-75">
                    <div
                      className="text-white"
                      style={{
                        fontSize: 15,
                        fontWeight: "500",
                      }}
                    >
                      Add Item to store
                    </div>
                    <div
                      className="text-white "
                      style={{
                        fontSize: 13,
                        fontWeight: "400",
                      }}
                    >
                      Use this option to add goods to a branch or your warehouse
                    </div>
                  </div>
                  <div
                    className="w-25 d-flex align-items-center justify-content-between rounded-1"
                    style={{
                      border: `1px solid ${color.white}`,
                    }}
                  >
                    <div className="px-1 d-flex align-items-center mx-1 justify-content-center">
                      <FaPlus size={13} color={color.white} />
                    </div>
                    <div className="text-white text-end px-2">Add </div>
                  </div>
                </div>
                <div
                  className="rounded-4 dshb-card mt-3 p-2 d-flex align-items-center justify-content-between"
                  style={{
                    // background: "#24a4ff",
                    height: 100,
                  }}
                >
                  <div className="w-75">
                    <div
                      className="text-white"
                      style={{
                        fontSize: 15,
                        fontWeight: "500",
                      }}
                    >
                      Open Store Front
                    </div>
                    <div
                      className="text-white "
                      style={{
                        fontSize: 13,
                        fontWeight: "400",
                      }}
                    >
                      Open a store front to start selling.
                    </div>
                  </div>
                  <div
                    className="w-25 d-flex align-items-center justify-content-between rounded-1"
                    style={{
                      border: `1px solid ${color.white}`,
                    }}
                  >
                    <div className="px-1 d-none d-flex align-items-center mx-1 justify-content-center">
                      <FaPlus size={13} color={color.white} />
                    </div>
                    <div className="text-white text-end px-2">Open </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="section-title">Most sold items</div>
                  {Array.from(Array(5)).map((i, index) => (
                    <div
                      className="d-flex align-items-start justify-content-between w-100 mt-3"
                      key={index}
                    >
                      <div className="w-50 d-flex align-items-center">
                        <div
                          className="rounded-2 p-1"
                          style={{
                            background: "#ffedea",
                            marginRight: 5,
                          }}
                        >
                          <SiMicrogenetics size={23} color={color.primary} />
                        </div>
                        <div className="">
                          <div className="most-sold_title">Kemage Gen</div>
                          <div className="most-sold_number">233 items</div>
                        </div>
                      </div>
                      <div
                        className="w-25 most-sold_value text-end"
                        style={{
                          color: index % 2 == 0 ? color.red : color.green,
                        }}
                      >
                        56%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
