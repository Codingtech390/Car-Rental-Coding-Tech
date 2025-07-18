import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-300 border-t-primary"></div>
    </div>
  );
};

export default Loader;
