import React from "react";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

function modelsCustomArrow({ type, onClick }) {
  return (
    <button
      className={`custom-arrow ${
        type === "PREV" ? "prev-arrow" : "next-arrow"
      }`}
      onClick={onClick}
    >
      {type === "PREV" ? (
        <HiOutlineArrowLongLeft />
      ) : (
        <HiOutlineArrowLongRight />
      )}
    </button>
  );
}

export default modelsCustomArrow;
