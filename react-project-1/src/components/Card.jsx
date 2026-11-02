/* eslint-disable no-unused-vars */
import React from "react";
import { BookmarkMinus } from "lucide-react";
import Badge from "./Badge";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.brandLogo} alt="" />
        <button>
          Save <BookmarkMinus />
        </button>
      </div>
      <div className="center">
        <h3>
          {props.company} <span>{props.datePosted}</span>
        </h3>
        <h2>{props.post}</h2>
        <div className="tags">
          <Badge level={props.level} tags={props.tag1} />
          <Badge level={props.level} tags={props.tag2} />
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>${props.pay}/hr</h3>
          <span>{props.location}</span>
        </div>
        <div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
