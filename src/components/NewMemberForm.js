import React, { useState } from "react";
import Member from "./Member";

function NewMemberForm(props) {
  const [member, setMember] = useState({
    name: "",
    title: "",
    department: "",
    shift: ""
  });
  const changeHandler = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    const newMember = {
      ...member,
      id: Date.now()
    };
    props.addNewMember(newMember);
    setMember({ name: "", title: "", department: "", shift: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={member.name}
        onChange={changeHandler}
      />

      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={member.title}
        onChange={changeHandler}
      />

      <label htmlFor="department">Department</label>
      <input
        type="text"
        name="department"
        placeholder="department"
        value={member.department}
        onChange={changeHandler}
      />

      <label htmlFor="shift">Shift</label>
      <input
        type="text"
        name="shift"
        placeholder="Shift"
        value={member.shift}
        onChange={changeHandler}
      />
      <button type="submit">Add New Team Member</button>
    </form>
  );
}

export default NewMemberForm;
