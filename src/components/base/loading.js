import React from "react";
import ReactLoading from "react-loading";
  
export function Loading() {
  return (
    <div id = "loading">
      <ReactLoading type="spokes" color="#ffffff"
        height={100} width={100} />
    </div>
  );
}