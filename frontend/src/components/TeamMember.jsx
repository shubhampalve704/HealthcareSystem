import React from "react";

const TeamMember = ({ name, role }) => {
  return (
    <div className="team-member-card">
      <h1>{role}</h1>
      <h4>{name}</h4>
    </div>
  );
};

export default TeamMember;
