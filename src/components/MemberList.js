import React from "react";
import Member from "./Member";
function MemberCard(props) {
  const team = props.teamMembers;
  const keys = Object.keys(team);

  return (
    <div>
      {keys.map(key => {
        const teamMember = team[key];
        return (
          <Member
            photo={teamMember.photo}
            name={teamMember.name}
            title={teamMember.title}
            department={teamMember.department}
            shift={teamMember.shift}
          />
        );
      })}
    </div>
  );
}

export default MemberCard;
