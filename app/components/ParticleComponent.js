// components/ParticleComponent.js
import React, { Component } from "react";
import Particles from "react-particles-js";

class ParticleComponent extends Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 100, // Number of particles
            },
            size: {
              value: 3, // Size of particles
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    );
  }
}

export default ParticleComponent;
