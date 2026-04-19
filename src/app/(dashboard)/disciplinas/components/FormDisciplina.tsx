"use client";

import { useState } from "react";
import { Disciplina } from "@/src/model/Disciplina";
import { useDisciplinas } from "@/src/app/context/DisciplinasContext";

export default function FormDisciplina() {
  const { add } = useDisciplinas();

  const [nome, setNome] = useState("");
  const [nomeLongo, setNomeLongo] = useState("");
  const [codigo, setCodigo] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const nova: Disciplina = {
      id: crypto.randomUUID(),
      nome,
      nomeLongo,
      codigo,
    };

    add(nova); 

    setNome("");
    setNomeLongo("");
    setCodigo("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} className="border p-2 w-full" />
      <input placeholder="Nome longo" value={nomeLongo} onChange={e => setNomeLongo(e.target.value)} className="border p-2 w-full" />
      <input placeholder="Código" value={codigo} onChange={e => setCodigo(e.target.value)} className="border p-2 w-full" />

      <button className="bg-blue-600 text-white px-4 py-2">
        Adicionar
      </button>
    </form>
  );
}