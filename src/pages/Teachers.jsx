"use client";

import { useState } from "react";

export default function Teachers({ state }) {
  const lista = state.teachers || [];

  const setLista = (novos) => {
    state.setTeachers(novos);
  };

  const [form, setForm] = useState({
    nome: "",
    cargaHorariaAlvo: "",
    disciplinasHabilitadas: [],
    comentarios: ""
  });

  // 🔥 adicionar professor
  const addProfessor = () => {
    if (!form.nome) return;

    setLista([
      ...lista,
      {
        nome: form.nome,
        cargaHorariaAlvo: form.cargaHorariaAlvo
          ? Number(form.cargaHorariaAlvo)
          : undefined,
        disciplinasHabilitadas: form.disciplinasHabilitadas,
        comentarios: form.comentarios
      }
    ]);

    // limpa formulário
    setForm({
      nome: "",
      cargaHorariaAlvo: "",
      disciplinasHabilitadas: [],
      comentarios: ""
    });
  };

  // 🔥 remover professor
  const removeProfessor = (index) => {
    setLista(lista.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Professores</h2>

      {/* ================= FORM ================= */}
      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Nome"
          value={form.nome}
          onChange={(e) =>
            setForm({ ...form, nome: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Carga horária alvo"
          value={form.cargaHorariaAlvo}
          onChange={(e) =>
            setForm({
              ...form,
              cargaHorariaAlvo: e.target.value
            })
          }
        />

        <textarea
          placeholder="Comentários"
          value={form.comentarios}
          onChange={(e) =>
            setForm({
              ...form,
              comentarios: e.target.value
            })
          }
        />

        {/* 🔥 CHECKBOX DE DISCIPLINAS */}
        <div style={{ marginTop: 10 }}>
          <p>Disciplinas habilitadas:</p>

          {(state.subjects || []).map((s, index) => {
            console.log(state.subjects);
            const isChecked =
              form.disciplinasHabilitadas.includes(s.nome);

            return (
              <label
                key={index}
                style={{ display: "block" }}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {
                    if (isChecked) {
                      // remove
                      setForm({
                        ...form,
                        disciplinasHabilitadas:
                          form.disciplinasHabilitadas.filter(
                            (d) => d !== s.nome
                          )
                      });
                    } else {
                      // adiciona
                      setForm({
                        ...form,
                        disciplinasHabilitadas: [
                          ...form.disciplinasHabilitadas,
                          s.nome
                        ]
                      });
                    }
                  }}
                />

                {s.nome}
              </label>
            );
          })}

          {/* 🔥 feedback visual */}
          <p style={{ marginTop: 5 }}>
            Selecionadas:{" "}
            {form.disciplinasHabilitadas.length > 0
              ? form.disciplinasHabilitadas.join(", ")
              : "Nenhuma"}
          </p>
        </div>

        <button onClick={addProfessor}>Adicionar</button>
      </div>

      {/* ================= LISTA ================= */}
      <ul>
        {lista.map((p, i) => (
          <li key={p.nome + i}>
            <strong>{p.nome}</strong>

            {p.cargaHorariaAlvo && (
              <span> ({p.cargaHorariaAlvo}h)</span>
            )}

            {p.disciplinasHabilitadas?.length > 0 && (
              <div>
                Disciplinas:{" "}
                {p.disciplinasHabilitadas.join(", ")}
              </div>
            )}

            {p.comentarios && (
              <div>Obs: {p.comentarios}</div>
            )}

            <button onClick={() => removeProfessor(i)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}