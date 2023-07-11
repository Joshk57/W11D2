import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useTheme } from '../../context/ThemeContext';
import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {

const {themeName, setThemeName} = useTheme();

const handleClick = (e) => {
  e.preventDefault();
  if (themeName === 'day') {
    setThemeName('day')
  } else if (themeName === 'night') {
    setThemeName('night')
  }
    
  }
}

  return (
    
    
    <section>
      <img  className='greenhouse-img'
            src={dayImage}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;