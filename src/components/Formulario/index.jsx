import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import treinador from "../../assets/treinador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input";
import Detalhe from "./detalhe";
import ReducerProvider from "../../context/contextoFormulario";

// Neste componente temos nosso formulário e dentro dele
// temos os componentes que precisam consumir nosso estado.
// Lembre-se qual é o passo que devemos dar para que nosso
// componentes podem consumir um estado global.

const Formulario = () => {
  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokémon de Ash</h2>
        </div>
        <Link className="retorna" to="/">
          Inicio
        </Link>
      </header>
      <div className="formulario-entrada">
        <h3>Solicitação de atenção</h3>
        <p>
          Por favor, preencha o formulário para que possamos mostrar seu Pokémon
        </p>
        <div className="corpo-formulario">
          {/*
           Se ao menos tivéssemos uma maneira de "encapsular" nossos componentes
           para que possam acessar o estado global.
          */}
          <ReducerProvider>
            <div className="inputs">
              <div>
                <p className="nome-secao">
                  <img src={treinador} alt="treinador" />
                  <span>Treinador</span>
                </p>
                <Input name="nome" action="ATUALIZAR_TREINADOR" label="Nome" />
                <Input name="sobrenome" action="ATUALIZAR_TREINADOR" label="Sobrenome" />
                <Input name="email" action="ATUALIZAR_TREINADOR" label="Email" type="email" />
              </div>
              <div>
                <p className="nome-secao">
                  <img src={pikachu} alt="pikachu" />
                  <span>Pokémon</span>
                </p>
                <Input name="nomePokemon" action="ATUALIZAR_POKEMON" label="Nome" />
                <Input name="tipoPokemon" action="ATUALIZAR_POKEMON" label="Tipo" />
                <Input name="elementoPokemon" action="ATUALIZAR_POKEMON" label="Elemento" />
                <Input name="alturaPokemon" action="ATUALIZAR_POKEMON" label="Altura" />
                <Input name="idadePokemon" action="ATUALIZAR_POKEMON" label="Idade" />
              </div>
            </div>
            <Detalhe />
          </ReducerProvider>
        </div>
      </div>
    </>
  );
};

export default Formulario;
