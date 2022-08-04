import React, { useContext, useState } from "react";
import { InfoContext } from "../../context/contextoFormulario";

const Input = ({ name, label, type = "text", action }) => {

  const { dispatch, state } = useContext(InfoContext)
  // Aqui devemos acessar o estado global para obter os dados
  // do formulário e uma maneira de atualizá-los.

  // Além disso, usaremos um estado local para lidar com o estado da input.
  const onChange = (e) => {
    dispatch({ type: action, payload: { field: e.target.name, value: e.target.value } })

  };

  const onBlur = (e) => {
    e.preventDefault();
    onChange(e)

    // Aqui devemos atualizar o estado global com os dados de
    // cada entrada.
    // DICA: Podemos usar o nome de cada entrada para salvar
    // os dados no estado global usando uma notação { chave: valor }
  };

  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
