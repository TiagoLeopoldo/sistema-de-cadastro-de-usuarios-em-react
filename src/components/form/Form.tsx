import "./form.css";
import ButtonRegister from "../buttons/ButtonRegister";

const Form = () => {
  return (
    <section>
      <h1>Cadastro de Usuários</h1>
      <label htmlFor="nome">
        Nome <input id="nome" placeholder="Seu nome">
        </input>
      </label>
      <label htmlFor="email">
        E-mail <input id="email" placeholder="Seu e-mail">
        </input>
      </label>
      <label htmlFor="idade">
        Idade <input id="idade" placeholder="Sua idade">
        </input>
      </label>
      <label htmlFor="cidade">
        Cidade <input id="cidade" placeholder="Cidade onde reside">
        </input>
      </label>
      <ButtonRegister />
    </section>
  )
}

export default Form;