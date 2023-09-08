/* eslint-disable react/prop-types */
export default function Hint(props) {
  return (
    <div className="hints">
      {props.needsHint.hint1 === true ? (
        <div className="hint" onClick={() => props.handleHintClick('hint1')}>
          <p>{props.genres}</p>
        </div>
      ) : (
        <p className="hint" onClick={() => props.handleHintClick('hint1')}>
          Genres
        </p>
      )}
      {props.needsHint.hint2 === true ? (
        <p className="hint" onClick={() => props.handleHintClick('hint2')}>
          {props.correctAnswer.esrb_rating.name}
        </p>
      ) : (
        <p className="hint" onClick={() => props.handleHintClick('hint2')}>
          ESRB Rating
        </p>
      )}
      {props.needsHint.hint3 === true ? (
        <p className="hint" onClick={() => props.handleHintClick('hint3')}>
          {props.correctAnswer.metacritic}
        </p>
      ) : (
        <p className="hint" onClick={() => props.handleHintClick('hint3')}>
          Metacritic Score
        </p>
      )}
      {props.needsHint.hint4 === true ? (
        <p className="hint" onClick={() => props.handleHintClick('hint4')}>
          {props.correctAnswer.released}
        </p>
      ) : (
        <p className="hint" onClick={() => props.handleHintClick('hint4')}>
          Release Date
        </p>
      )}
    </div>
  );
}
