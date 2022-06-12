import React from 'react';

type SquareProps = {
  onClick: () => void,
  value: string,
}

function Square(props: SquareProps) {
  const { onClick, value } = props;

  return (
    <button type="button" className="square" onClick={() => { onClick(); }}>
      {value}
    </button>
  );
}

export default Square;
