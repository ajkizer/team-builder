import React from "react";

const Member = props => {
  return (
    <div className="member-list">
      {props.memberList.map(member => {
        return (
          <div>
            <h1>{member.name}</h1>
            <h3>{member.title}</h3>
            <p>{member.department}</p>
            <p>{member.shift}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Member;
