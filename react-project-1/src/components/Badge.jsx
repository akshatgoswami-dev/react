// import React from 'react'

const Badge = (props) => {
  console.log(props.level);
  return <span className={`badge ${props.level}`}>{props.tags}</span>;
};

export default Badge;
