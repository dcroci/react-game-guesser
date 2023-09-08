import { useState } from 'react';
import Game from './components/Game';
import Navbar from './components/Navbar';

export default function App() {
  const [modalIsActive, setModalIsActive] = useState(false);
  function handleToggleModal() {
    setModalIsActive((prevState) => !prevState);
  }
  return (
    <>
      <Navbar
        handleToggleModal={handleToggleModal}
        modalIsActive={modalIsActive}
      />
      <Game />
    </>
  );
}
