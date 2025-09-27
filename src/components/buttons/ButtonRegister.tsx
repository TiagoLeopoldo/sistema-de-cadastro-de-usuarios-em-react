import "./button-register.css";

interface ButtonRegisterProps {
  onClick?: () => void;

}

const ButtonRegister = ({onClick}: ButtonRegisterProps) => {
  return (
    <button onClick={onClick}>Cadastrar</button>
  )
}

export default ButtonRegister;