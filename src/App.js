import React from "react";
import "./App.css";
import team from "./data";
import { useState } from "react";
import { Route } from "react-router-dom";
import NewMemberForm from "./components/NewMemberForm";
import Member from "./components/Member";

function App() {
  const [teamMembers, setTeamMembers] = useState(team);
  const addNewMember = member => {
    setTeamMembers([...teamMembers, member]);
  };

  return (
    <div className="App">
      <NewMemberForm addNewMember={addNewMember} />
      <h1>Meet The Team</h1>
      <Member memberList={teamMembers} />
    </div>
  );
}

export default App;
