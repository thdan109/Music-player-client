import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  React.useEffect(() => {
    async function getData() {
      const data = await axios.get(`${process.env.API_BACKEND_LINK}/music/top100`);
      console.log(data);
    }
    getData();
  }, []);
  return <div className="App"></div>;
}

export default App;
