import './button-remove.css';

interface ButtonRemoveProps {
  onClick: () => void;
}

const ButtonRemove = ({ onClick }: ButtonRemoveProps) => {
  return (
    <button className="button-remove" onClick={onClick}>
      Remover
    </button>
  );
};

export default ButtonRemove;