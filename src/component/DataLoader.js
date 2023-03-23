import React from "react";
import Loader from "react-js-loader";
export default function DataLoader() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Loader
        type="bubble-spin"
        bgColor={"#FFFFFF"}
        title={"Loading..."}
        color={"#FFFFFF"}
        size={60}
      />
    </div>
  );
}
