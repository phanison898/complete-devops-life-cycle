import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const App = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const fetch_data = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const data = res.data;
      setSports(data);
    };
    fetch_data();
  }, []);

  return (
    <div className="container">
      <div className="input__containar">
        <input type="text" name="enter" placeholder="Enter your favourate sports name" />
        <button type="submit">enter</button>
      </div>

      <div className="sports__container">
        {sports?.map((sport) => (
          <div className="sports" key={sport.id}>
            <div className="sports_name">{sport?.username}</div>
            <span className="delete_icon">X</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
