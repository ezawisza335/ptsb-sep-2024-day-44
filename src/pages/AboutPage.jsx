import React from "react";

import "./AboutPage.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="img-container">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Julie Richardson"
        />
      </div>
      <div className="name-text">
        <h1>Julie Richardson</h1>
      </div>
    </div>
  );
}

function BiographySection() {
  return (
    <div className="biography-section">
      <h1>The Heart of Yugopotamia and Code</h1>

      <p>
        Hailing from the glowing city of Luminaris on the planet Yugopotamia,
        Julie Richardson is a celebrated web developer and humanitarian who has
        redefined what it means to be a good Samaritan. Growing up in
        Maravelle’s crystal valleys, Julie’s natural curiosity for technology
        blossomed when she built her first holo-web network at the age of 12,
        connecting her community’s isolated settlements.
      </p>
      <br />
      <p>
        Julie combined her technical skills with her passion for service by
        creating the "Unity Beacon Initiative," a digital platform that uses
        cutting-edge starstone technology to coordinate disaster relief, provide
        coding education to underprivileged youth, and connect volunteers across
        Yugopotamia. Her web apps, like Starlight Connect and CodeKindly, are
        widely praised for their seamless design and impact-driven focus.
      </p>
      <br />
      <p>
        When she’s not debugging code or deploying community-focused projects,
        Julie enjoys hiking the shimmering moonlit trails of Dustridge,
        experimenting with glowfruit recipes, and spending time with her
        mischievous pet glowfox, Nova.
      </p>
      <br />
      <p>
        Julie Richardson’s efforts have not only advanced Yugopotamia’s
        technological landscape but have also created a more compassionate and
        connected society. As she likes to say, “Building a better future starts
        with a single line of code—and a heart full of hope.”
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="about-page">
      <HeroSection />
      <BiographySection />
    </div>
  );
}
