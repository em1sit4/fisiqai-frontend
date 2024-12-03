"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { IPathnameInfo } from "@/interfaces/interfaces";
import { PATHS_INFO } from "@/data/paths-info";
import { usePathname } from "next/navigation";

interface IPathnameInfoContext {
  currentPathInfo: IPathnameInfo | null;
}

const PathnameInfoContext = createContext<IPathnameInfoContext | undefined>(undefined);

export function PathnameInfoProvider({ children }: { children: React.ReactNode }) {
  const [currentPathInfo, setCurrentPathInfo] = useState<IPathnameInfo | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Aqui recupero un elemento del arreglo PATHS_INFO para luego utilizarlo en otros componentes o paginas (pages)
    const pathElement = PATHS_INFO.find((pathInfoParameter) => pathname.includes(pathInfoParameter.url)) || null;
    setCurrentPathInfo(pathElement);
  }, [pathname]);

  return <PathnameInfoContext.Provider value={{ currentPathInfo }}>{children}</PathnameInfoContext.Provider>;
}

// Hook personalizado para consumir el contexto
export function usePathnameInfoContext() {
  const context = useContext(PathnameInfoContext);
  if (!context) {
    throw new Error("usePathnameInfoContext debe ser usado dentro de PathnameInfoProvider");
  }
  return context;
}
