import { useTheme } from "../hooks/useTheme";
import modeIcon from "../assets/mode-icon.svg";

//styles
import "./ThemeSelector.css";

export default function ThemeSelector() {
  const { changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light");
  };
  console.log(mode);
  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          onClick={toggleMode}
          alt="light/dark toggle icon"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
    </div>
  );
}
