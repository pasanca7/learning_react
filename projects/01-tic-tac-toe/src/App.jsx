import { useState, useEffect } from 'react'
import './App.css'

const TURN = {
  X: '❌',
  O: '⚪'
}

const Square = ({ isSelected, children, updateBoard, winner, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  // Guardar el estado
  const [board, setBoard] = useState(() => {
    const boardStorage = window.localStorage.getItem('board')
    return boardStorage ? JSON.parse(boardStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnStorage = window.localStorage.getItem('turn')
    return turnStorage ?? TURN.X
  })
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    if (winner !== null) {
      // Si hay un ganador, elimina los datos del localStorage
      window.localStorage.removeItem('board')
      window.localStorage.removeItem('turn')
    }
  }, [winner])

  const checkWinner = (board) => {
    if (
      //Horizontal winner
      (board[0] === board[1] && board[0] === board[2] && board[0] !== null) ||
      (board[3] === board[4] && board[3] === board[5] && board[3] !== null) ||
      (board[6] === board[7] && board[6] === board[8] && board[6] !== null) ||
      //Vertical Winner
      (board[0] === board[3] && board[0] === board[6] && board[0] !== null) ||
      (board[1] === board[4] && board[1] === board[7] && board[1] !== null) ||
      (board[2] === board[5] && board[2] === board[8] && board[2] !== null) ||
      //Diagonal
      (board[0] === board[4] && board[0] === board[8] && board[0] !== null) ||
      (board[6] === board[4] && board[6] === board[2] && board[6] !== null)
    ) {
      const newWinner = turn
      setWinner(newWinner)
    } else if (board.every(cell => cell !== null)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURN.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    if (!winner && !board[index]) {
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)

      checkWinner(newBoard)

      const newTurn = turn === TURN.X ? TURN.O : TURN.X
      setTurn(newTurn)
    }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className='game'>
        {board.map((_, index) => (
          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
          >
            {board[index]}
          </Square>
        ))}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURN.X}>
          {TURN.X}
        </Square>
        <Square isSelected={turn === TURN.O}>
          {TURN.O}
        </Square>
      </section>

      <section>
        {winner != null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false
                    ? 'Draw'
                    : 'Win'
                }
              </h2>
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Reset Game</button>
              </footer>
            </div>
          </section>
        )}
      </section>
    </main>
  )
}

export default App
