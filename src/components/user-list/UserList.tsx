import './user-list.css';
import type { Formulario } from '../form/Form';

interface UserListProps {
  usuarios: Formulario[]
}

const UserList = ({ usuarios }: UserListProps) => {
  return (
    <section className="user-list">
      {usuarios.length === 0 ? (
        <p className="user-empty">Nenhum usuário cadastrado ainda.</p>) 
        :
        (<ul>
          {usuarios.map((usuario) => (<li key={usuario.email}><p className="user-name">{usuario.nome}</p><span className="user-details">{usuario.email} - {usuario.idade} anos - {usuario.cidade}</span></li>))}
        </ul>)}

    </section>
  )
}

export default UserList;