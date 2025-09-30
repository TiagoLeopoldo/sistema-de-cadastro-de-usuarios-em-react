import React from 'react';
import type { Formulario } from '../form/Form';
import './user-counter.css';

interface Props {
  usuarios: Formulario[];
}

const UserCounter: React.FC<Props> = ({ usuarios }) => {
  const total = usuarios.length;
  const maiores = usuarios.filter((u) => parseInt(u.idade) >= 18).length;
  const menores = usuarios.filter((u) => parseInt(u.idade) < 18).length;

  return (
    <div className="user-counter">
      <p><strong>Total de usuários:</strong> {total}</p>
      <p><strong>Maiores de idade:</strong> {maiores}</p>
      <p><strong>Menores de idade:</strong> {menores}</p>
    </div>
  );
};

export default UserCounter;