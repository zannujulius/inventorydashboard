import React from "react";
import "./style.css";
import DataTable, { TableColumn } from "react-data-table-component";
import { data } from "./data";
import moment from "moment";
import { FcCalendar } from "react-icons/fc";
import Button from "../../Button";
import { color } from "../../../constant/color";
type DataRow = {
  id: string;
  name: string;
  address: string;
  sales: string;
  date: string;
};

const columns: TableColumn<DataRow>[] = [
  {
    name: "Branch Id",
    center: true,
    selector: (row) => row.id,
    grow: 1,
  },
  {
    name: "Branch Name",
    selector: (row) => row.name,
    center: true,
    sortable: true,
    grow: 2,
    cell: (item) => {
      return (
        <div className="d-flex align-items-center">
          <div
            className="branch-image_table mx-1"
            style={{
              width: 25,
              height: 25,
              borderRadius: "50%",
              border: `1px solid ${color.primary}`,
            }}
          >
            {/* <img src="" alt="image branch" /> */}
          </div>
          <div>{item.name}</div>
        </div>
      );
    },
  },
  {
    name: "Branch address",
    selector: (row) => row.address,
    center: true,
    grow: 2,
  },
  {
    name: "Branch Sales",
    center: true,
    selector: (row) => row.sales,
    sortable: true,
    grow: 2,
  },
  {
    name: "Date created",
    center: true,
    selector: (row) => row.date,
    grow: 2,
    cell: (item) => {
      return (
        <div className="d-flex align-items-center">
          <div className="px-1">
            <FcCalendar size={18} />
          </div>
          <div>{moment(item.date).format("lll")}</div>
        </div>
      );
    },
    sortable: true,
  },
  {
    name: "Action",
    selector: (row) => row.id,
    cell: (item) => {
      return (
        <div
          className="d-flex rounded-1 align-items-center justify-content-center"
          style={{
            width: 200,
            border: `1px solid ${color.primary}`,
            height: 30,
          }}
        >
          <div
            className=""
            style={{
              fontSize: 12,
              color: color.primary,
            }}
          >
            View
          </div>
        </div>
      );
    },
  },
];

const BranchTable: React.FC = () => {
  return (
    <div className="">
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationPerPage={10}
      />
    </div>
  );
};

export default BranchTable;
