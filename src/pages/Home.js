import "./Home.css";
import profilePicture from "../images/profilePicture.jpeg";
import { Fireworks, useFireworks } from "fireworks-js/dist/react";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const { mode } = useTheme();
  const { options } = useFireworks({
    initialStart: true,
    initialOptions: {
      hue: {
        min: 0,
        max: 345,
      },
      delay: {
        min: 15,
        max: 15,
      },
      rocketsPoint: 50,
      speed: 10,
      acceleration: 1.2,
      friction: 0.95,
      gravity: 1.5,
      particles: 50,
      trace: 3,
      explosion: 6,
      autoresize: true,
      brightness: {
        min: 50,
        max: 85,
        decay: {
          min: 0.015,
          max: 0.03,
        },
      },
      mouse: {
        click: false,
        move: true,
        max: 1,
      },
    },
  });

  const style = {
    position: "absolute",
    top: 150,
    left: 0,
    width: "100%",
    height: "90%",
  };

  return (
    <div className={`home ${mode}`}>
      <Fireworks options={options} style={style} />
      <h1 className={`name ${mode}`}>Hi, I am Dinah</h1>
      <h2 className={`description ${mode}`}>
        Industrial Engineer | Junior Frontend Developer
      </h2>
      <img
        className="profile-picture"
        src={profilePicture}
        alt="Dinah Novema"
      />
    </div>
  );
}
