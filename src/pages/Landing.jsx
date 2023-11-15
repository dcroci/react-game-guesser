import { useState } from 'react';
import Game from './../components/Game';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import Confetti from 'react-dom-confetti';
const config = {
  angle: 90,
  spread: 180, // Adjust the spread to make the confetti fall downwards
  startVelocity: 50,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 4000,
  stagger: 3,
  width: '10px',
  height: '10px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
};

export default function App() {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const [totalWins, setTotalWins] = useState(() => {
    const wins = Number(localStorage.getItem('wins'));
    return wins ? wins : 0;
  });

  function handleToggleModal() {
    setModalIsActive((prevState) => !prevState);
  }
  return (
    <>
      <div
        style={{
          position: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          top: 0,
          left: 0,
          height: '1000px',
          width: '100vw',
          pointerEvents: 'none',
        }}
      >
        <Confetti active={showConfetti} config={config} />
      </div>
      <Navbar
        handleToggleModal={handleToggleModal}
        modalIsActive={modalIsActive}
        totalWins={totalWins}
      />

      <main>
        <Game
          setTotalWins={setTotalWins}
          totalWins={totalWins}
          setShowConfetti={setShowConfetti}
        />
      </main>
      <Footer />
    </>
  );
}
