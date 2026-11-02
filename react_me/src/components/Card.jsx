const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.user} />
      <h1>{props.user}</h1>
      <p> age:{props.age}</p>
      <a href={props.link}>view profile</a>
    </div>
  );
};

export default Card;
