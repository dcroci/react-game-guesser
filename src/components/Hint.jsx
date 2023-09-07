export default function Hint(props) {
  return (
    <>
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
          {props.correctAnswer.name}
        </p>
      ) : (
        <p className="hint" onClick={() => props.handleHintClick('hint2')}>
          Studio
        </p>
      )}
      {props.needsHint.hint3 === true ? (
        <p className="hint" onClick={() => props.handleHintClick('hint3')}>
          {props.correctAnswer.name}
        </p>
      ) : (
        <p className="hint" onClick={() => props.handleHintClick('hint3')}>
          Description
        </p>
      )}
    </>
  );
}
