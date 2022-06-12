import React from 'react';
import Square from './square';

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

type BoardProps = {
};

type BoardState = {
  squares: string[],
  xIsNext: boolean,
};

class Board extends React.Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i: number) {
    const { squares } = this.state;

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const { xIsNext } = this.state;
    const s = squares.slice();
    s[i] = xIsNext ? 'X' : 'O';
    this.setState({ squares: s, xIsNext: !xIsNext });
  }

  renderSquare(i: number) {
    const { squares } = this.state;
    return <Square value={squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    const { xIsNext } = this.state;
    const { squares } = this.state;
    const winner = calculateWinner(squares);

    const status: string = winner ? `Winner ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
