// import React from 'react'

const Badge = ({ level }) => {
  return <span className={`badge ${level}`}>{level}</span>;
};

export default Badge;
