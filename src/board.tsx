import React from 'react';
import Square from './square';

class Board extends React.Component {
  static renderSquare() {
    return <Square />;
  }

  render() {
    const status: string = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {Board.renderSquare()}
          {Board.renderSquare()}
          {Board.renderSquare()}
        </div>
        <div className="board-row">
          {Board.renderSquare()}
          {Board.renderSquare()}
          {Board.renderSquare()}
        </div>
        <div className="board-row">
          {Board.renderSquare()}
          {Board.renderSquare()}
          {Board.renderSquare()}
        </div>
      </div>
    );
  }
}

export default Board;
