/* eslint-disable react/prop-types */
export default function Navbar({ handleToggleModal, modalIsActive }) {
  return (
    <>
      <nav>
        <div className="logo">
          <h1>Game Guesser</h1>
        </div>
        <ul>
          <li onClick={handleToggleModal}>Instructions</li>
          <li>Contact</li>
        </ul>
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
            </ul>
            <p onClick={handleToggleModal}>Let{`'`}s Play!</p>
          </div>
        ) : null}
      </>
    </>
  );
}
