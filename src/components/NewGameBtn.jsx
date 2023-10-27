function NewGameBtn({ text, cssClass, triggerNewGame }) {
  return (
    <p className={cssClass} onClick={triggerNewGame}>
      {text}
    </p>
  );
}

export default NewGameBtn;
