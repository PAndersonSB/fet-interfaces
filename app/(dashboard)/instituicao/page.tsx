"use client";

import { useInstituicao } from "@/app/context/InstituicaoContext";

export default function InstituicaoPage() {
  const { instituicao, setInstituicao } = useInstituicao();

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">Instituição</h1>

      {/* Nome */}
      <div>
        <label>Nome</label>
        <input
          className="border p-2 w-full"
          value={instituicao.nome}
          onChange={(e) =>
            setInstituicao({ ...instituicao, nome: e.target.value })
          }
        />
      </div>

      {/* Dias da semana */}
      <div>
        <label>Dias por semana</label>
        <input
          type="number"
          className="border p-2"
          value={instituicao.diasSemana}
          onChange={(e) =>
            setInstituicao({
              ...instituicao,
              diasSemana: Number(e.target.value),
            })
          }
        />
      </div>

      {/* Períodos */}
      <div>
        <label>Períodos por dia</label>
        <input
          type="number"
          className="border p-2"
          value={instituicao.periodos}
          onChange={(e) =>
            setInstituicao({
              ...instituicao,
              periodos: Number(e.target.value),
            })
          }
        />
      </div>

    </div>
  );
}