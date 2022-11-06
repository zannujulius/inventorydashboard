import React from "react";
import { ScaleLoader, BarLoader } from "react-spinners";
import { css } from "@emotion/react";
import "./style.css";

interface Props {
  bgColor?: String;
  textColor?: String;
  fontSize?: Number;
  loading?: boolean;
  loaderColor?: string | undefined;
  text: String;
  height?: number;
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Button: React.FC<Props> = ({
  bgColor,
  textColor,
  fontSize,
  loading,
  loaderColor,
  text,
  height,
}) => {
  return (
    <button
      disabled={loading}
      className="p-2 shadow-sm rounded-2 w-100 d-flex align-items-center justify-content-center custom-btn"
      style={{
        color: "#fff",
        height: height || 45,
        backgroundColor: "#8b21fd",
        backgroundImage: "linear-gradient(19deg, #8b21fd 0%, #a421ff 100%)",
      }}
    >
      {loading ? (
        <BarLoader
          color={loaderColor || "#ffffff"}
          loading={loading}
          height={3}
          speedMultiplier={1}
          width={50}
        />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
