import React from "react";
import { FaPiggyBank } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
import { color } from "../../../constant/color";
import "./styles.css";
import { GiTakeMyMoney, GiPayMoney, GiPaperBagOpen } from "react-icons/gi";

interface CardProps {
  title?: string;
  value?: string;
  type?: string;
}

const TopCards: React.FC<CardProps> = ({ title, value, type }) => {
  return (
    <div className="rounded-2 bg-white px-2 shadow-sm dshb-top_card my-4 d-flex align-items-start py-3">
      <div className="w-75 flex-column d-flex align-items-start justify-content-between h-100">
        <div
          className=""
          style={{
            fontSize: 13,
          }}
        >
          {title}
        </div>
        <div
          className=""
          style={{
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          {value}
        </div>
      </div>
      <div className="w-25 flex-column d-flex align-items-center justify-content-between h-100">
        <div>
          {type == "sales" ? (
            <GiTakeMyMoney size={28} color={color.primary} />
          ) : type == "debts" ? (
            <GiPayMoney size={28} color={color.primary} />
          ) : (
            <GiPaperBagOpen size={28} color={color.primary} />
          )}
        </div>
        <div
          className="d-flex align-items-center mb-2 p-1 rounded-1"
          style={{
            background: "#dbffdb",
          }}
        >
          <div
            style={{
              color: color.green,
              fontSize: 12,
            }}
          >
            30%
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <MdArrowUpward color={color.green} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
