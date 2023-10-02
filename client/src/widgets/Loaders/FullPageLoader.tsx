import React from "react";
import CircularLoading from "./CircularLoading";

const FullPageLoader = () => {
  return (
    <div className="min-h-screen grid place-content-center min-w-full">
      <CircularLoading size={'3rem'}/>
    </div>
  );
};

export default FullPageLoader;
