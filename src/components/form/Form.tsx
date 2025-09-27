import { useState } from "react";
import "./form.css";
import ButtonRegister from "../buttons/ButtonRegister";

interface Formulario {
  nome: string;
  email: string;
  idade: string;
  cidade: string
}


const Form = () => {
  const [camposDeFormulario, setCamposDeFormulario] = useState<Formulario>({
    nome: '',
    email: '',
    idade: '',
    cidade: ''
  })

  const [erros, setErros] = useState<{ [campo: string]: string }>({
    nome: "",
    email: "",
    idade: "",
    cidade: ""
  })

  const [formularioValido, setFormularioValido] = useState(false);

  const handleSubmit = () => {
    const novosErros: { [campo: string]: string } = {};

    if (!camposDeFormulario.nome.trim()) {
      novosErros.nome = "Informe seu nome.";
    }

    if (!camposDeFormulario.email.trim()) {
      novosErros.email = "Informe seu email.";
    }

    if (!camposDeFormulario.idade.trim()) {
      novosErros.idade = "Informe sua idade.";
    }

    if (!camposDeFormulario.cidade.trim()) {
      novosErros.cidade = "Informe sua cidade.";
    }

    setErros(novosErros);

    if (Object.keys(novosErros).length === 0) {
      setFormularioValido(true);
    } else {
      setFormularioValido(false);
    }
  }

  return (
    <section>
      <h1>Cadastro de Usuários</h1>
      <label htmlFor="nome">
        Nome <input className={erros.nome ? "erro-input" : ""} id="nome" placeholder="Seu nome" type="text" name="nome" value={camposDeFormulario.nome} onChange={(e) => setCamposDeFormulario({ ...camposDeFormulario, nome: e.target.value })} />
        {erros.nome && <span className="erro">{erros.nome}</span>}
      </label>
      <label htmlFor="email">
        E-mail <input className={erros.nome ? "erro-input" : ""} id="email" placeholder="seu-email@exemplo.com.br" type="email" name="email" value={camposDeFormulario.email} onChange={(e) => setCamposDeFormulario({ ...camposDeFormulario, email: e.target.value })}/>
        {erros.email && <span className="erro">{erros.email}</span>}
      </label>
      <label htmlFor="idade">
        Idade <input className={erros.nome ? "erro-input" : ""} id="idade" placeholder="Sua idade" type="number" name="idade" value={camposDeFormulario.idade} onChange={(e) => setCamposDeFormulario({ ...camposDeFormulario, idade: e.target.value })} />
        {erros.idade && <span className="erro">{erros.idade}</span>}
      </label>
      <label htmlFor="cidade">
        Cidade <input className={erros.nome ? "erro-input" : ""} id="cidade" placeholder="Cidade onde reside" type="text" name="cidade" value={camposDeFormulario.cidade} onChange={(e) => setCamposDeFormulario({ ...camposDeFormulario, cidade: e.target.value })} />
        {erros.cidade && <span className="erro">{erros.cidade}</span>}
      </label>
      <ButtonRegister onClick={handleSubmit} />
      {formularioValido && <p className="sucesso">Formulário enviado com sucesso!</p>}

    </section>
  )
}

export default Form;