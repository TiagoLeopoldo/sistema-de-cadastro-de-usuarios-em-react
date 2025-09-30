import { useState, useEffect } from "react";
import "./form.css";
import ButtonRegister from "../buttons/ButtonRegister";

export interface Formulario {
  nome: string;
  email: string;
  idade: string;
  cidade: string;
}

interface FormProps {
  onAddUser: (usuario: Formulario) => void;
  usuarios: Formulario[];
  usuarioEditando?: Formulario | null;
  onCancelEdit?: () => void;
}

const Form = ({ onAddUser, usuarios, usuarioEditando, onCancelEdit }: FormProps) => {
  const [camposDeFormulario, setCamposDeFormulario] = useState<Formulario>({
    nome: '',
    email: '',
    idade: '',
    cidade: ''
  });

  const [erros, setErros] = useState<{ [campo: string]: string }>({
    nome: "",
    email: "",
    idade: "",
    cidade: ""
  });

  const [formularioValido, setFormularioValido] = useState(false);

  useEffect(() => {
    if (usuarioEditando) {
      setCamposDeFormulario(usuarioEditando);
      setErros({});
      setFormularioValido(false);
    }
  }, [usuarioEditando]);

  const handleSubmit = () => {
    const novosErros: { [campo: string]: string } = {};

    if (!camposDeFormulario.nome.trim()) {
      novosErros.nome = "Informe seu nome.";
    }

    if (!camposDeFormulario.email.trim()) {
      novosErros.email = "Informe seu email.";
    } else {
      const emailJaExiste = usuarios.some(
        (usuario) =>
          usuario.email.toLowerCase() === camposDeFormulario.email.toLowerCase() &&
          usuarioEditando?.email !== camposDeFormulario.email
      );

      if (emailJaExiste) {
        novosErros.email = "Este email já está cadastrado.";
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailValido = emailRegex.test(camposDeFormulario.email);

      if (!emailValido) {
        novosErros.email = "Email inválido. Deve conter '@' e '.'";
      }
    }

    if (!camposDeFormulario.idade.trim()) {
      novosErros.idade = "Informe sua idade.";
    } else {
      const idadeConvertida = parseInt(camposDeFormulario.idade);
      if (isNaN(idadeConvertida) || idadeConvertida <= 0) {
        novosErros.idade = "Idade deve ser maior que zero.";
      }
    }

    if (!camposDeFormulario.cidade.trim()) {
      novosErros.cidade = "Informe sua cidade.";
    }

    setErros(novosErros);

    if (Object.keys(novosErros).length === 0) {
      setFormularioValido(true);
      onAddUser(camposDeFormulario);
      setCamposDeFormulario({ nome: '', email: '', idade: '', cidade: '' });
    } else {
      setFormularioValido(false);
    }
  };

  return (
    <section>
      <h1>{usuarioEditando ? "Editar Usuário" : "Cadastro de Usuários"}</h1>

      <label htmlFor="nome">
        Nome
        <input
          value={camposDeFormulario.nome}
          className={erros.nome ? "erro-input" : ""}
          id="nome"
          placeholder="Seu nome"
          type="text"
          name="nome"
          onChange={(e) => setCamposDeFormulario({ ...camposDeFormulario, nome: e.target.value })}
        />
        {erros.nome && <span className="erro">{erros.nome}</span>}
      </label>

      <label htmlFor="email">
        E-mail
        <input
          value={camposDeFormulario.email}
          className={erros.email ? "erro-input" : ""}
          id="email"
          placeholder="seu-email@exemplo.com.br"
          type="email"
          name="email"
          disabled={!!usuarioEditando}
          onChange={(e) => setCamposDeFormulario({ ...camposDeFormulario, email: e.target.value })}
        />
        {erros.email && <span className="erro">{erros.email}</span>}
      </label>

      <label htmlFor="idade">
        Idade
        <input
          value={camposDeFormulario.idade}
          className={erros.idade ? "erro-input" : ""}
          id="idade"
          placeholder="Sua idade"
          type="number"
          name="idade"
          onChange={(e) => setCamposDeFormulario({ ...camposDeFormulario, idade: e.target.value })}
        />
        {erros.idade && <span className="erro">{erros.idade}</span>}
      </label>

      <label htmlFor="cidade">
        Cidade
        <input
          value={camposDeFormulario.cidade}
          className={erros.cidade ? "erro-input" : ""}
          id="cidade"
          placeholder="Cidade onde reside"
          type="text"
          name="cidade"
          onChange={(e) => setCamposDeFormulario({ ...camposDeFormulario, cidade: e.target.value })}
        />
        {erros.cidade && <span className="erro">{erros.cidade}</span>}
      </label>

      <ButtonRegister onClick={handleSubmit} />
      {usuarioEditando && (
        <button type="button" onClick={onCancelEdit} className="button-register">
          Cancelar edição
        </button>
      )}
      {formularioValido && <p className="sucesso">Formulário enviado com sucesso!</p>}
    </section>
  );
};

export default Form;
