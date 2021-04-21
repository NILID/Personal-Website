import "../../styles/StackCard.scss";

function StackCard(props) {
  return (
    <div className="StackCardContainer">
      <img className="StackCardImage" src={props.img} alt="stack logo" />
      <h5 className="StackCardImageTitle">{props.title}</h5>
    </div>
  );
}

export default StackCard;
