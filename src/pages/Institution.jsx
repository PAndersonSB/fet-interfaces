"use client";

import { useState } from "react";

export default function Institution({ state }) {
  const [nome, setName] = useState(state.institution.nome);
  const [comments, setComments] = useState(state.institution.comments);

  const save = () => {
    state.setInstitution({ nome, comments });
  };

  return (
    <div>
      <h2>Instituição</h2>

      <input
        placeholder="Nome da instituição"
        value={nome}
        onChange={e => setName(e.target.value)}
      />

      <textarea
        placeholder="Comentários"
        value={comments}
        onChange={e => setComments(e.target.value)}
      />

      <button onClick={save}>Salvar</button>
    </div>
  );
}