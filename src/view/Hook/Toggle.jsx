import React, { useState } from "react";
import "../../Game_Caro/GameStyle.scss";
function Toggle() {
  const [on, setOn] = useState(false);

  const handleToggle = () => {
    if (on) {
      setOn(false);
    } else {
      setOn(true);
    }
  };
  return (
    <>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-on" onClick={() => setOn(false)}>
          Off
        </div>
      </div>
    </>
  );
}
export default Toggle;
