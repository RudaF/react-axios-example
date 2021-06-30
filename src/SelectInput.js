import React from "react";

export default function SelectInput(props) {
  return (
    <select
      style={{ width: "200px" }}
      className="form-select"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    >
      <option defaultValue>Choose a cat breed</option>
      {/* depois de salvar as raças no state, renderizamos a lista de raças entre as opções do select */}
      {props.breeds.map((breed) => (
        <option key={breed.id} value={breed.id}>
          {breed.name}
        </option>
      ))}
    </select>
  );
}
