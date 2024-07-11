import * as React from "react"
import { options } from './particleOptions'
import Particles from "react-tsparticles";

const ParticlesBg = () => {

    const particlesInit = (main) => {
        console.log(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const option = options[1]
    // const option = options[Math.floor(Math.random() * options.length)]

  return (
    <Particles
        id="tsparticles"
        options={option}
        init={particlesInit}
        loaded={particlesLoaded} />
  );
}

export default ParticlesBg
