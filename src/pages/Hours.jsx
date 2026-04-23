"use client";

import { v4 as uuid } from "uuid";

export default function Hours({ state }) {
  const lista = state.hours;

  const updateLista = (newLista) => {
    state.setHours(newLista);
  };

  const handleCountChange = (value) => {
    const count = Math.max(0, Number(value));
    let novasHoras = [...lista.horas];

    if (count < novasHoras.length) {
      novasHoras = novasHoras.slice(0, count);
    } else if (count > novasHoras.length) {
      const extra = Array.from(
        { length: count - novasHoras.length },
        (_, i) => ({
          id: uuid(),
          nome: "",
          ordem: novasHoras.length + i
        })
      );
      novasHoras = [...novasHoras, ...extra];
    }

    updateLista({
      numeroDeHoras: count,
      horas: novasHoras
    });
  };

  const updateNome = (index, nome) => {
    const novasHoras = [...lista.horas];
    novasHoras[index] = { ...novasHoras[index], nome };

    updateLista({
      ...lista,
      horas: novasHoras
    });
  };

  const addHora = () => {
    const novasHoras = [
      ...lista.horas,
      {
        id: uuid(),
        nome: "",
        ordem: lista.horas.length
      }
    ];

    updateLista({
      numeroDeHoras: novasHoras.length,
      horas: novasHoras
    });
  };

  const removeHora = (index) => {
    const novasHoras = lista.horas.filter((_, i) => i !== index);

    updateLista({
      numeroDeHoras: novasHoras.length,
      horas: novasHoras
    });
  };

  return (
    <div>
      <h2>Horários</h2>

      <div>
        <label>Quantidade de horários: </label>
        <input
          type="number"
          value={lista.numeroDeHoras}
          onChange={(e) => handleCountChange(e.target.value)}
        />
      </div>

      <ul>
        {lista.horas.map((h, i) => (
          <li key={h.id}>
            <input
              placeholder={`Horário ${i + 1}`}
              value={h.nome}
              onChange={(e) => updateNome(i, e.target.value)}
            />
            <button onClick={() => removeHora(i)}>X</button>
          </li>
        ))}
      </ul>

      <button onClick={addHora}>Adicionar Horário</button>
    </div>
  );
}