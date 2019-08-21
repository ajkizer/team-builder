import React from "react";
import "./App.css";
import team from "./data";
import { useState } from "react";
import { Route } from "react-router-dom";
import MemberCard from "./components/MemberList";
import Member from "./components/Member";

function App() {
  const [teamMembers, setTeamMembers] = useState(team);

  return (
    <div className="App">
      <Route
        path="/"
        render={props => <MemberCard {...props} teamMembers={teamMembers} />}
      />
    </div>
  );
}

export default App;
