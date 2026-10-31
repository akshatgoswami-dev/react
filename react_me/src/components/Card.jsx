// eslint-disable-next-line no-unused-vars
import React from "react";

const Card = (props) => {
  console.log("aaaaaaaa", props);

  return (
    <div className="card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJ6RQ5DFAaxpYE3IOkkOoUHGIncLAgdrj4xzPf4epBzFaiVbGCgdb4qOzkF_x5OP4EQtUYH8emhYY7iRF9KuBGxa1xgj-Cag0tCDGUA&s=10"
        alt=""
      />
      <h1>{props.user}</h1>
      <p>{props.age}</p>
      <button>view profile</button>
    </div>
  );
};

export default Card;
