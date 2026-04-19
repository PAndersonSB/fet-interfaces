"use client";

import { useState, useEffect } from "react";
import { useInstituicao } from "@/src/app/context/InstituicaoContext";

export default function FormInstituicao() {
  const { instituicao, setInstituicao } = useInstituicao();

  const [nome, setNome] = useState("");
  const [diasSemana, setDiasSemana] = useState(5);
  const [periodos, setPeriodos] = useState(6);

  // Preenche o form com os dados do context
  useEffect(() => {
    if (instituicao) {
      setNome(instituicao.nome);
      setDiasSemana(instituicao.diasSemana);
      setPeriodos(instituicao.periodos);
    }
  }, [instituicao]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const data = {
      nome,
      diasSemana,
      periodos,
    };

    setInstituicao(data);

    console.log("Dados salvos:", data);

    // 🔥 depois você vai chamar o backend aqui
    // await instituicaoService.create(data)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
      <h1 className="text-2xl font-bold">Instituição</h1>

      {/* Nome */}
      <div>
        <label className="block mb-1">Nome</label>
        <input
          className="w-full border px-3 py-2"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      {/* Dias por semana */}
      <div>
        <label className="block mb-1">Dias por semana</label>
        <input
          type="number"
          className="w-32 border px-3 py-2"
          value={diasSemana}
          onChange={(e) => setDiasSemana(Number(e.target.value))}
        />
      </div>

      {/* Períodos */}
      <div>
        <label className="block mb-1">Períodos por dia</label>
        <input
          type="number"
          className="w-32 border px-3 py-2"
          value={periodos}
          onChange={(e) => setPeriodos(Number(e.target.value))}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2"
      >
        Salvar
      </button>
    </form>
  );
}