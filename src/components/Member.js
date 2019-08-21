import React from "react";
import MemberCard from "./MemberList";

const Member = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.title}</h3>
      <p>Department: {props.department}</p>
      <p>Shift: {props.shift}</p>
    </div>
  );
};

export default Member;
