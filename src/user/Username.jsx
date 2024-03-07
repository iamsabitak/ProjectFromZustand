import React, { useState } from "react";
import { store } from "../zustand/store";

function Username() {
  const [name, setName] = useState("");
  const { addName, removeName, user } = store();
  const onHandleSubmit = () => {
    addName(name);
  };
  const onHandleRemove = (id) => {
    removeName(id);
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onHandleSubmit}>add</button>

      <>
        {user.map((name) => (
          <>
            {" "}
            <li key={name.id}>{name.name}</li>
            <button onClick={() => onHandleRemove(name.id)}>delete</button>
          </>
        ))}
      </>
    </div>
  );
}

export default Username;
