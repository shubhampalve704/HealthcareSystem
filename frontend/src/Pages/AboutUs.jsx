import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import TeamMember from "../components/TeamMember";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | Aarogya Connect"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
     
      <div className="team-page">
      <h2>Our Team</h2>
      <div className="team-members">
        <TeamMember
          name="Nikhil Chavan"
          role="AI Integration Lead"
        />
        <TeamMember
          name="Shubham Palve"
          role="Backend Developer"
        />
        <TeamMember
          name="Shashwat Avhad"
          role="Frontend Developer"
        />
        <TeamMember
          name="Shubhankar Karajkhede"
          role="Backend Developer"
        />
      </div>
    </div>
    </>
  );
};

export default AboutUs;
