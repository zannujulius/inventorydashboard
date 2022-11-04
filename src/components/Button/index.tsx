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
}) => {
  return (
    <button
      disabled={loading}
      className="p-2 rounded-2 w-100 d-flex align-items-center justify-content-center custom-btn"
      style={{
        color: "#fff",
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
