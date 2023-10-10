import { useState } from 'react';
import Game from './components/Game';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [totalWins, setTotalWins] = useState(() => {
    const wins = JSON.parse(localStorage.getItem('wins'));
    return wins ? wins : 0;
  });

  function handleToggleModal() {
    setModalIsActive((prevState) => !prevState);
  }
  return (
    <>
      <Navbar
        handleToggleModal={handleToggleModal}
        modalIsActive={modalIsActive}
        totalWins={totalWins}
      />
      <Game setTotalWins={setTotalWins} totalWins={totalWins} />
      <Footer />
    </>
  );
}
