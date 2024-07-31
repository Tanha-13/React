import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="text-5xl w-full h-96 flex items-center justify-center font-medium drop-shadow-2xl text-white bg-slate-600">
      User: {userId}{" "}
    </div>
  );
}

export default User;
