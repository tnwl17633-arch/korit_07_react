import { useState } from "react";

function TodoInput({ onAdd }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ flex: 1, padding: "8px" }}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoInput;
