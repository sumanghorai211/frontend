import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://backend-hosting-5rw7.onrender.com/check")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  console.log(data);
  return (
    <div>
      {data.map((d) => {
        return <div key={d.name}>{d.name}</div>;
      })}
    </div>
  );
  // return <div>{data[1].name}</div>;
}

export default App;
