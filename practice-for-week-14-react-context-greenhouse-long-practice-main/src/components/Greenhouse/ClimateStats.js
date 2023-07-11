import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';

function ClimateStats() {
  const {climateName, setClimateName} = useClimate();
  const {hygrometerValue, setHygrometerValue} = useClimate();
  // debugger
  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {climateName}°F
      </div>
      <div className="humidity">
        Humidity {hygrometerValue}%
      </div>
    </div>
  )
}

export default ClimateStats;