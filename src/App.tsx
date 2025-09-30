import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/form/Form';
import UserList from './components/user-list/UserList';
import type { Formulario } from './components/form/Form';
import UserCounter from './components/user-counter/UserCounter';

function App() {
  const [usuarios, setUsuarios] = useState<Formulario[]>(() => {
    const dadosSalvos = localStorage.getItem("usuarios");
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });

  const [usuarioEditando, setUsuarioEditando] = useState<Formulario | null>(null);

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("usuarios");
    if (dadosSalvos) {
      const usuariosConvertidos: Formulario[] = JSON.parse(dadosSalvos);
      setUsuarios(usuariosConvertidos);
    }
  }, []);

  const adicionarUsuario = (novoUsuario: Formulario) => {
    if (usuarioEditando) {
      const listaAtualizada = usuarios.map((usuario) =>
        usuario.email === usuarioEditando.email ? novoUsuario : usuario
      );
      setUsuarios(listaAtualizada);
      setUsuarioEditando(null);
    } else {
      setUsuarios([...usuarios, novoUsuario]);
    }
  };

  const removerUsuario = (email: string) => {
    const novaLista = usuarios.filter((usuario) => usuario.email !== email);
    setUsuarios(novaLista);
  };

  return (
    <>
      <main>
        <Form
          onAddUser={adicionarUsuario}
          usuarios={usuarios}
          usuarioEditando={usuarioEditando}
          onCancelEdit={() => setUsuarioEditando(null)}
        />
        <UserCounter usuarios={usuarios} />
        <UserList
          usuarios={usuarios}
          onRemoveUser={removerUsuario}
          onEditUser={setUsuarioEditando}
        />
      </main>
    </>
  );
}

export default App;
