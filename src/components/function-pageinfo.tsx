"use client";

import { usePathnameInfoContext } from "@/context/pathname-context";

export default function FunctionPageInfo() {
  const { currentPathInfo } = usePathnameInfoContext();

  return (
    <div className="flex flex-col gap-5 max-w-[500px] mx-auto justify-center text-center">
      <p className="font-black text-6xl">{currentPathInfo?.title}</p>
      <p className="text-2xl">Selecciona un tema para comenzar 😊</p>
    </div>
  );
}
