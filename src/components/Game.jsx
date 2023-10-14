/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Loader from './Loader';
import Hint from './Hint';

export default function Game({ totalWins, setTotalWins }) {
  //DETERMINES IF GAME COVER IMG IS SHOWN TO USER
  const [imageHidden, setImageHidden] = useState(true);
  //USER INPUT FROM SEARCH BAR
  const [userGuess, setUserGuess] = useState('');
  //MAIN DETAILS OF RANDOM GAME FROM API
  const [correctAnswer, setCorrectAnswer] = useState([]);
  //EXTRA DETAILS OF RANDOM GAME FROM API
  const [correctAnswerDetails, setCorrectAnswerDetails] = useState([]);
  //DETERMINES IF GAME IS COMPLETE
  const [gameOver, setGameOver] = useState(false);
  //GENRES
  const [genres, setGenres] = useState([]);
  //DETERMINES WHAT SHOWS WHILE API IS LOADING DATA
  const [isLoading, setIsLoading] = useState(false);
  //DETERMINES IF AND WHICH HINTS USER WANTS
  const [needsHint, setNeedsHint] = useState({
    hint1: false,
    hint2: false,
    hint3: false,
    hint4: false,
    hint5: false,
    hint6: false,
  });
  //SHOWS HINT FOR USER SELECTED HINT BOX
  function handleHintClick(hint) {
    setNeedsHint((prevState) => {
      return {
        ...prevState,
        [hint]: true,
      };
    });
  }
  //TRACK WINS IN LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem('wins', JSON.stringify(totalWins));
  }, [totalWins]);
  //SET RANDOM GAME DATA
  useEffect(() => {
    setIsLoading(true);
    async function fetchRandomGame() {
      const res = await fetch(
        `https://api.rawg.io/api/games?metacritic=75,200&page_size=500&key=28528c3e9f5e44ceaea5b485946d9fe9`
      );
      const data = await res.json();
      const gameData = data.results;
      const randomGame = gameData[Math.floor(Math.random() * gameData.length)];
      console.log(randomGame);
      setCorrectAnswer(randomGame);
      setGenres(handleGenres(randomGame.genres));
    }
    fetchRandomGame();
    setIsLoading(false);
  }, [gameOver]);
  //GET EXTRA DETAILS ABOUT THE RANDOM GAME
  useEffect(() => {
    async function getGameDetails() {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games/${correctAnswer.id}?key=28528c3e9f5e44ceaea5b485946d9fe9`
        );
        const data = await res.json();
        setCorrectAnswerDetails(data);
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    }
    getGameDetails();
  }, [correctAnswer]);

  console.log(correctAnswerDetails);
  //GET USER INPUT FROM SEARCH BAR
  function handleGuess(e) {
    setUserGuess(e.target.value);
  }
  //SET ALL FUNCTIONS BACK TO DEFAULT AND ADD A WIN TO TOTAL WINS
  function restartGame() {
    setTotalWins((prevWins) => prevWins + 1);
    setTimeout(() => {
      setImageHidden(true);
      setGameOver(true);
      setNeedsHint({
        hint1: false,
        hint2: false,
        hint3: false,
        hint4: false,
      });
    }, 3000);
  }
  //COMPARES USER INPUT WITH CORRECT NAME
  function handleSubmit(e) {
    e.preventDefault();
    if (correctAnswer.name.toLowerCase().startsWith(userGuess.toLowerCase())) {
      setImageHidden(false);
      setUserGuess('');
      alert('You got it!');
      restartGame();
    } else {
      setUserGuess('');
      alert('Not even close pipsqueak. Try again!');
    }
  }
  //genres
  function handleGenres(genresData) {
    const genreNames = genresData.map((genre) => genre.name + ' ');
    return genreNames;
  }
  return (
    <>
      <div className="game">
        <div className="image-container">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <img
                src={correctAnswer.background_image}
                style={
                  //HIDES IMAGE IF GAME IS STILL GOING AND USER HAS NOT CLICKED EYE IMG
                  imageHidden
                    ? { filter: 'brightness(0)' }
                    : { filter: 'brightness(100%)' }
                }
                alt="Game Cover"
              />
              <img
                src="../../public/eye.png"
                className="eye"
                //REVEALS GAME COVER IMG
                onClick={() => setImageHidden(false)}
                alt="eyeball icon to reveal video game cover"
              />
            </>
          )}
        </div>
        <Hint
          correctAnswer={correctAnswer}
          handleHintClick={handleHintClick}
          needsHint={needsHint}
          genres={genres}
          details={correctAnswerDetails}
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
    </>
  );
}
