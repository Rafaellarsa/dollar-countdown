import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-number number">
        <div className="front front-number">{props.timer}</div>
        <div className="back back-number"></div>
      </div>
      <h2>{props.text}</h2>
    </div>
  );
}

export default Card;
