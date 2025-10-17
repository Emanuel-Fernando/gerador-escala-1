import React from 'react';

function EscalaList({ escalas }) {
  if (!escalas || escalas.length === 0) {
    return <p>Nenhuma escala cadastrada.</p>;
  }

  return (
    <ul>
      {escalas.map((escala, i) => (
        <li key={i}>
          <strong>{escala.funcionario}</strong> - {escala.turno}
        </li>
      ))}
    </ul>
  );
}

export default EscalaList;