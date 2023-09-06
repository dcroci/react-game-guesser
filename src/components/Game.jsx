import { useState } from 'react';

export default function Game() {
  const [imageHidden, setImageHidden] = useState(true);
  function toggleImageHidden() {
    setImageHidden((prevState) => !prevState);
  }
  const blackImg = { filter: 'brightness(0)' };
  const shownImg = { filter: 'brightness(100%)' };

  return (
    <div className="game">
      <img src="../d2.jpg" style={imageHidden ? blackImg : shownImg} />
      <img src="../eye.png" className="eye" onClick={toggleImageHidden} />
      <p className="hint">Genre</p>
      <p className="hint">Studio</p>
      <p className="hint">Details</p>
      <form>
        <input type="text" placeholder="Guess a game..." />
        <input type="submit" value={'Submit'} />
      </form>
    </div>
  );
}
