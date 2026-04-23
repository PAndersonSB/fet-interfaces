"use client";

import { v4 as uuid } from "uuid";

export default function Days({ state }) {
  const lista = state.days; // ListaDias

  const updateLista = (newLista) => {
    state.setDays(newLista);
  };

  // 🔥 ALTERAR QUANTIDADE
  const handleCountChange = (value) => {
    const count = Math.max(0, Number(value));
    let novosDias = [...lista.dias];

    if (count < novosDias.length) {
      novosDias = novosDias.slice(0, count);
    } else if (count > novosDias.length) {
      const extra = Array.from(
        { length: count - novosDias.length },
        (_, i) => ({
          id: uuid(),
          nome: ""
        })
      );
      novosDias = [...novosDias, ...extra];
    }

    updateLista({
      numeroDeDias: count,
      dias: novosDias
    });
  };

  // 🔥 ATUALIZAR NOME
  const updateNome = (index, nome) => {
    const novosDias = [...lista.dias];
    novosDias[index] = { ...novosDias[index], nome };

    updateLista({
      ...lista,
      dias: novosDias
    });
  };

  // 🔥 ADICIONAR
  const addDia = () => {
    const novosDias = [
      ...lista.dias,
      { id: uuid(), nome: "" }
    ];

    updateLista({
      numeroDeDias: novosDias.length,
      dias: novosDias
    });
  };

  // 🔥 REMOVER
  const removeDia = (index) => {
    const novosDias = lista.dias.filter((_, i) => i !== index);

    updateLista({
      numeroDeDias: novosDias.length,
      dias: novosDias
    });
  };

  return (
    <div>
      <h2>Dias</h2>

      <div>
        <label>Quantidade de dias: </label>
        <input
          type="number"
          value={lista.numeroDeDias}
          onChange={(e) => handleCountChange(e.target.value)}
        />
      </div>

      <ul>
        {lista.dias.map((d, i) => (
          <li key={d.id}>
            <input
              placeholder={`Dia ${i + 1}`}
              value={d.nome}
              onChange={(e) => updateNome(i, e.target.value)}
            />
            <button onClick={() => removeDia(i)}>X</button>
          </li>
        ))}
      </ul>

      <button onClick={addDia}>Adicionar Dia</button>
    </div>
  );
}