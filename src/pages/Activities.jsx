import { useState } from "react";

export default function Activities({ state }) {
  const [form, setForm] = useState({});

  const add = () => {
    state.setActivities([...state.activities, form]);
  };

  return (
    <div>
      <h2>Atividades</h2>

      <select onChange={e => setForm({ ...form, teacher: e.target.value })}>
        <option>Professor</option>
        {state.teachers.map(t => (
          <option key={t.name}>{t.name}</option>
        ))}
      </select>

      <select onChange={e => setForm({ ...form, subject: e.target.value })}>
        <option>Disciplina</option>
        {state.subjects.map(s => (
          <option key={s.name}>{s.name}</option>
        ))}
      </select>

      <select onChange={e => setForm({ ...form, group: e.target.value })}>
        <option>Turma</option>
        {state.students.map(s => (
          <option key={s.name}>{s.name}</option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Duração"
        onChange={e => setForm({ ...form, duration: e.target.value })}
      />

      <button onClick={add}>Adicionar</button>

      <ul>
        {state.activities.map((a, i) => (
          <li key={i}>
            {a.teacher} - {a.subject}
          </li>
        ))}
      </ul>
    </div>
  );
}