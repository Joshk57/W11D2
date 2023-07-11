import './LightSwitch.css';
import { handleClick } from

function LightSwitch() {
  return (
    <div className="light-switch day">
      
      {/* <div className="on">DAY</div> */}
      <button onClick={handleClick}>DAY</button>
      {/* <div className="off">NIGHT</div> */}
      <button onClick={handleClick}>NIGHT</button>
    </div>
  );
}

export default LightSwitch;