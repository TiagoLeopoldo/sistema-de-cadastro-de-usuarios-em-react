import './user-list.css';
import type { Formulario } from '../form/Form';
import ButtonRemove from '../buttons/ButtonRemove';

interface UserListProps {
  usuarios: Formulario[];
  onRemoveUser: (email: string) => void;
}



const UserList = ({ usuarios, onRemoveUser }: UserListProps) => {
  return (
    <section className="user-list">
      {usuarios.length === 0 ? (
        <p className="user-empty">Nenhum usuário cadastrado ainda.</p>)
        :
        (<ul>
          {usuarios.map((usuario) => (<li key={usuario.email}>
            <p className="user-name">{usuario.nome}</p>
            <p className="user-details">{usuario.email}</p>
            <p className="user-details">{usuario.idade} anos</p>
            <p className="user-details">{usuario.cidade}</p>
            <ButtonRemove onClick={() => onRemoveUser(usuario.email)} />
          </li>
          ))}
        </ul>)}
    </section>
  )
}

export default UserList;