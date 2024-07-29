import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import TeamMember from "../components/TeamMember";
const HealthBuddy = () => {
  return (
    <>
      <Hero
        title={"HealthBuddy is Comming Soon | Stay Tuned"}
        imageUrl={"/commingSoon.jpg"}     
      />
     
      <div className="team-page">
      <h2>Our Team</h2>
      <div className="team-members">
        
        <TeamMember
          name="Shubham Palve"
          role="Developed And Managed By"
        />
        
      </div>
    </div>
    </>
  );
};

export default HealthBuddy;
