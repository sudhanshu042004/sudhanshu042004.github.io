import axios from "axios";
import React, { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const callData = async () => {
      const response = await axios.get(
        "https://api.github.com/users/sudhanshu042004",
      );
      setData(response.data);
      setLoading(false);
    };

    try {
      callData();
    } catch (err) {
      console.log(`erorr comes up while fetching data : ${err}`);
    }
  }, []);

  return { data, loading };
};

export default useData;
