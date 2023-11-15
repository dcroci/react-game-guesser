/* eslint-disable react/prop-types */
export default function Navbar({
  handleToggleModal,
  modalIsActive,
  totalWins,
}) {
  return (
    <>
      <nav>
        <div className="nav">
          <div className="logo">
            <h1>
              {/* <span>🎮</span>  */}
              Game Guesser
            </h1>
          </div>
          <ul>
            <li onClick={handleToggleModal}>Instructions</li>
            {/* <li>Contact</li> */}
            <li className="total-wins">{totalWins} 🏆</li>
          </ul>
        </div>
      </nav>
      <>
        {modalIsActive ? (
          <div className="modal">
            <h2>Welcome to Game Guesser!</h2>
            <p>Game Guesser is well... a game where you... guess games!</p>
            <ul>
              <li>
                Use the different hint buttons to figure out what the game is
              </li>
              <li>
                When you{`'`}re ready, submit your answer to see if you guessed
                correctly!
              </li>
              <li>
                * All games are ranked 75+ by Metacritic and come from all
                gaming platforms
              </li>
              <li>🌟 : Hint can easily give away the correct answer</li>
            </ul>
            <p onClick={handleToggleModal}>Let{`'`}s Play!</p>
          </div>
        ) : null}
      </>
    </>
  );
}
