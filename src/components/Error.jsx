import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-slate-700 to-slate-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Oops!</h1>
      <h2 className="text-2xl font-semibold mb-2">Something went wrong!!</h2>
      <h3 className="text-lg text-gray-300">
        {/* {err.status} : {err.statusText} */}
      </h3>
    </div>
  );
};

export default Error;
