import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {

  const {themeName, setThemeName} = useTheme();

  const handleClick = (e) => {
    console.log(e.target.innerText)
    e.preventDefault();
    if (e.target.innerText === 'DAY') {
      setThemeName('day')
    } else if (e.target.innerText === 'NIGHT') {
      setThemeName('night')
    } 
  }

  let classN = ""
  if (themeName === "day") {
    classN = "light-switch day"
  } else if (themeName === "night") {
    classN = "light-switch night"
  }
  
  return (

    <div className={classN} onClick={handleClick}>
      
      <div className="on">DAY</div>
      <div className="off">NIGHT</div>
    </div>
  );
}

export default LightSwitch;