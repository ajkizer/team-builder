import React from "react";

const Member = props => {
  return (
    <div className="member-list">
      {props.memberList.map(member => {
        return (
          <div className="member-card">
            <h1>{member.name}</h1>
            <h3>
              <em>{member.title}</em>
            </h3>
            <p>
              <em>{member.email}</em>
            </p>
            <p>Department: {member.department}</p>
            <p>Primary shift: {member.shift}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Member;
