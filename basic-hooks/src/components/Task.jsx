import React, { useContext, useEffect, useState } from "react";
import { ToggleTheme } from "../App";

function Task() {
  const [state, setState] = useState(0);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (display) {
      alert("Content has been Clicked");
    }
  }, [display]);

  const theme = useContext(ToggleTheme);
  const lightDarkMode = {
    backgroundColor: theme ? "gray" : "black",
    color: theme ? "black" : "gray",
    padding: "30px",
    width: "500px",
    margin: "20px"
  };

  return (
    <div style={lightDarkMode}>
      <div>
        {display && "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed voluptatum cum in exercitationem pariatur vero nam expedita ut incidunt eligendi."}
      </div>
      <button onClick={() => setDisplay(prevDisplay => !prevDisplay)} style={{ margin: "20px 0px" }}>Content</button>
      <div>{state}</div>
      <button onClick={() => setState(prevState => prevState + 1)}>Increase State</button>
    </div>
  );
}

export default Task;
