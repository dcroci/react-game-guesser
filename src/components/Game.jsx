import { useEffect, useState } from 'react';
import Hint from './Hint';

export default function Game() {
  const [imageHidden, setImageHidden] = useState(true);
  const [userGuess, setUserGuess] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState({});
  const [genres, setGenres] = useState([]);
  const [gameData, setGameData] = useState([]);
  const [needsHint, setNeedsHint] = useState({
    hint1: false,
    hint2: false,
    hint3: false,
    hint4: false,
  });
  function handleHintClick(hint) {
    setNeedsHint((prevState) => {
      return {
        ...prevState,
        [hint]: true,
      };
    });
  }

  function getRandomGame() {
    fetch(
      `https://api.rawg.io/api/games?metacritic=80,200&page_size=500&key=28528c3e9f5e44ceaea5b485946d9fe9`
    )
      .then((res) => res.json())
      .then((data) => {
        const gameData = data.results;
        const randomGame =
          gameData[Math.floor(Math.random() * gameData.length)];
        console.log(randomGame);
        setCorrectAnswer(randomGame);
        handleGenres(randomGame.genres);
      })
      .catch((error) => console.error('Error:', error));
  }

  useEffect(() => {
    getRandomGame();
  }, []);

  function handleGenres(genresData) {
    const genreNames = genresData.map((genre) => genre.name + ' ');
    setGenres(genreNames);
  }

  function handleGuess(e) {
    setUserGuess(e.target.value);
  }
  function restartGame() {
    setTimeout(() => {
      setImageHidden(true);
      getRandomGame();
      setNeedsHint({
        hint1: false,
        hint2: false,
        hint3: false,
      });
    }, 5000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (userGuess.toLowerCase() === correctAnswer.name.toLowerCase()) {
      setImageHidden(false);
      alert('You got it!');
      restartGame();
    } else {
      alert('Not even close pipsqueak. Try again!');
    }
  }
  return correctAnswer ? (
    <div className="game">
      <div className="image-container">
        <img
          src={correctAnswer.background_image}
          style={
            imageHidden
              ? { filter: 'brightness(0)' }
              : { filter: 'brightness(100%)' }
          }
          alt="Game Cover"
        />
        {/* <p className="skip">SKIP</p> */}
        <img
          src="../src/assets/eye.png"
          className="eye"
          onClick={() => setImageHidden(false)}
        />
      </div>
      <Hint
        correctAnswer={correctAnswer}
        genres={genres}
        handleHintClick={handleHintClick}
        needsHint={needsHint}
        releaseDate={correctAnswer.date}
        gameData={gameData}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Guess a game..."
          name="guess"
          value={userGuess}
          onChange={handleGuess}
        />
        <button>Submit</button>
      </form>
    </div>
  ) : null;
}
