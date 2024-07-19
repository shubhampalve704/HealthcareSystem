import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Our team consists of dedicated professionals committed to providing top-notch healthcare services. With years of experience and a passion for improving patient outcomes, we strive to deliver compassionate and comprehensive care to all individuals. From our skilled medical practitioners to our support staff, each member plays a vital role in ensuring that your health needs are met with the highest standards of excellence. We are here to support you on your health journey and empower you to live your best life.
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on your health.</p>
          <p>
          Our team believes in the power of collaboration and staying up-to-date with the latest advancements in healthcare. We are constantly learning and adapting to provide you with the best possible care. Whether you're seeking routine check-ups, specialized treatment, or guidance on wellness practices, we are here to listen, support, and guide you every step of the way. Your health and well-being are our top priorities, and we are honored to be a part of your healthcare journey.
          </p>
          <p>We pray for your health!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
