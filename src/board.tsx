import React from 'react';
import Square from './square';

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
    const status: string = `Next player: ${xIsNext ? 'X' : 'O'}`;

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
