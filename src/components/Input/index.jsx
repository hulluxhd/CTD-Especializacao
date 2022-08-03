import React, { useContext, useState } from "react";
import { InfoContext } from "../../context/contextoFormulario";

const Input = ({ name, label, type = "text" }) => {

  const { dispatch, state } = useContext(InfoContext)
  // Aqui devemos acessar o estado global para obter os dados
  // do formulário e uma maneira de atualizá-los.

  const [infoState, setInfoState] = useState({
    nomePokemon: '',
    sobrenome: '',
    email: '',
    nome: '',
  })

  // Além disso, usaremos um estado local para lidar com o estado da input.
  const onChange = (e) => {
    setInfoState(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  };

  const onBlur = (e) => {
    e.preventDefault();
    dispatch({ type: 'ATUALIZAR', event: e.target })

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
        value={state.name}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
