import './button-edit.css';

interface ButtonEditProps {
  onClick: () => void;
}

const ButtonEdit = ({ onClick }: ButtonEditProps) => {
  return (
    <button className="button-edit" onClick={onClick}>
      Editar
    </button>
  );
};

export default ButtonEdit;
