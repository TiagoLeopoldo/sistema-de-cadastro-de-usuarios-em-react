import { useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import UserList from './components/user-list/UserList'
import type { Formulario } from './components/form/Form';

function App() {
    const [usuarios, setUsuarios] = useState<Formulario[]>([]);

    const adicionarUsuario = (novoUsuario: Formulario) => {
      setUsuarios([...usuarios, novoUsuario]);
    };

  return (
    <>
      <main>
        <Form onAddUser={adicionarUsuario}/>
        <UserList usuarios={usuarios}/>
      </main>
    </>
  )
}

export default App
