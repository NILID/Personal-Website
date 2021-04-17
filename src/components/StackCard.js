function StackCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.img} alt="stack logo" />
    </div>
  );
}

export default StackCard;
