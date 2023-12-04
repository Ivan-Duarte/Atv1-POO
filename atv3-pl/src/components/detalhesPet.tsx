import React from "react";

interface DetalhesPetProps {
  tema: string;
  cliente: string;
  nome: string;
  tipo: string;
  raca: string;
  genero: string;
}

const DetalhesPet: React.FC<DetalhesPetProps> = (props) => {
  const { tema, cliente, nome, tipo, raca, genero } = props;

  return (
    <div style={{ marginLeft: "40px", marginTop: "30px" }}>
      <p>
        <b>Tutor:</b> {cliente}
      </p>
      <p>
        <b>Nome:</b> {nome}
      </p>
      <p>
        <b>Tipo:</b> {tipo}
      </p>
      <p>
        <b>Raça:</b> {raca}
      </p>
      <p>
        <b>Gênero:</b> {genero}
      </p>

      <button
        type="button"
        className="btn btn-success"
        style={{ width: "100px", marginRight: "20px" }}
      >
        Editar
      </button>
      <button
        type="button"
        className="btn btn-danger"
        style={{ width: "100px", left: "10px" }}
      >
        Excluir
      </button>
    </div>
  );
};

export default DetalhesPet;