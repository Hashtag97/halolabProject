import React, { useEffect, useState } from "react";
import Axios from "axios";
import List from "./component/list";
const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e";
    Axios.get(url).then((resp) => {
      const allData = resp.data;
      setData(allData);
      setLoading(false);
    });
  }, [setData]);

  if (!loading) {
    return (
      <div className=" container mx-auto">
        <List data={data} />
      </div>
    );
  } else {
    return (
      <div className="w-screen h-screen grid place-content-center">
        <p className="text-3xl">Loading...</p>
      </div>
    );
  }
};

export default App;
