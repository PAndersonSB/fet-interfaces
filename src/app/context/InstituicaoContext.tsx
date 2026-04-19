"use client";

import { createContext, useContext, useState } from "react";

type Instituicao = {
  nome: string;
  diasSemana: number;
  periodos: number;
};

type ContextType = {
  instituicao: Instituicao;
  setInstituicao: (data: Instituicao) => void;
};

const InstituicaoContext = createContext<ContextType | null>(null);

export function InstituicaoProvider({ children }: { children: React.ReactNode }) {
  const [instituicao, setInstituicao] = useState<Instituicao>({
    nome: "Minha Instituição",
    diasSemana: 5,
    periodos: 6,
  });

  return (
    <InstituicaoContext.Provider value={{ instituicao, setInstituicao }}>
      {children}
    </InstituicaoContext.Provider>
  );
}

export function useInstituicao() {
  const context = useContext(InstituicaoContext);
  if (!context) throw new Error("useInstituicao fora do provider");
  return context;
}