import axios from "axios";
import React, { useEffect, useState } from "react";
const token = import.meta.env.VITE_API_KEY;
const useData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const callData = async () => {
    const response = await axios.get(
      "https://api.github.com/users/sudhanshu042004",
      { headers: { Authorization: token } },
    );
    setData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    try {
      callData();
    } catch (err) {
      console.log(`erorr comes up while fetching data : ${err}`);
    }
  }, []);

  return { data, loading };
};

export default useData;
