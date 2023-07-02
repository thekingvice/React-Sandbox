import { useState } from "react";

export default function SideMenuAnimation() {
  const [num, setnum] = useState(5);

  function handleChange() {
    if (!num) {
      setnum(5);
    } else {
      setnum(0);
    }
  }

  return (
    <div className="SideMenuAnimation">
      <button onClick={handleChange}>Run</button>
      <div className="Menu" style={{ width: `${num}rem` }}>
        TEST TEST TEST TEST
      </div>
    </div>
  );
}
