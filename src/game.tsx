import React from 'react';
import Board from './board';

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

type GameState = {
  history: Array<string>[],
  xIsNext: boolean,
}

class Game extends React.Component<unknown, GameState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      history: [Array(9).fill(null)],
      xIsNext: true,
    };
  }

  handleClick(i: number) {
    const { history, xIsNext } = this.state;
    const current = history[history.length - 1];
    const squares = current.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        squares,
      ]),
      xIsNext: !xIsNext,
    });
  }

  render() {
    const { history, xIsNext } = this.state;
    const current = history[history.length - 1];
    const winner = calculateWinner(current);

    const status: string = winner ? `Winner ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
