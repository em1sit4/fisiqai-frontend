"use client";

import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="loading flex justify-center">
      <RotatingLines strokeColor="#2683ED" strokeWidth="5" animationDuration="0.75" width="60" visible={true} />
    </div>
  );
}
