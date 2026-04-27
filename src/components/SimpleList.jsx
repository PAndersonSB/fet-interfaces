import { useState } from "react";

export default function SimpleList({ items, setItems, label }) {
  const [value, setValue] = useState("");

  const add = () => {
    if (!value) return;
    setItems([...items, { nome: value }]);
    setValue("");
  };

  const remove = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>{label}</h2>

      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={add}>Adicionar</button>

      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item.nome}
            <button onClick={() => remove(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}