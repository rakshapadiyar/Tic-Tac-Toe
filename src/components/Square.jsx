const Square = ({ value, onClick }) => {
  return (
    <button type="button" className="square" onClick={onClick}>
      <p> {value}</p>
    </button>
  );
};

export default Square;
