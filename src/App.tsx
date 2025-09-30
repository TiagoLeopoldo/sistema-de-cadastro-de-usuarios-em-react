import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/form/Form';
import UserList from './components/user-list/UserList'
import type { Formulario } from './components/form/Form';

function App() {
    const [usuarios, setUsuarios] = useState<Formulario[]>([]);

    useEffect(() => {
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }, [usuarios]);

    useEffect(() => {
      const dadosSalvos = localStorage.getItem("usuarios");
      if (dadosSalvos) {
        const usuariosConvertidos: Formulario[] = JSON.parse(dadosSalvos);
        setUsuarios(usuariosConvertidos);
      }
    }, [])

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
