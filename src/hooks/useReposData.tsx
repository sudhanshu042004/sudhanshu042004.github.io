import axios from "axios";
import React, { useEffect, useState } from "react";

interface UserLanguages {
  [key: string]: number;
}

const useReposData = () => {
  const [repoData, setRepoData] = useState([]);
  const [languagesData, setLanguagesData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchingData = async () => {
    try {
      const responseData = await axios.get(
        "https://api.github.com/users/sudhanshu042004/repos",
      );
      const fetchedData = responseData.data;
      setRepoData(fetchedData);
      const userLanguages: UserLanguages = {};

      for (const repo of fetchedData) {
        const repoName = repo.name;
        const languagesResponse = await axios.get(
          `https://api.github.com/repos/sudhanshu042004/${repoName}/languages`,
        );
        const languages: UserLanguages = languagesResponse.data;
        for (const [language, bytesCount] of Object.entries(languages)) {
          const count: number = bytesCount;
          userLanguages[language] = (userLanguages[language] || 0) + count;
        }
        setLanguagesData(userLanguages);
        setLoading(false);
      }
    } catch (err) {
      console.log(`err comes up while fetching languagesData : ${err}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    try {
      fetchingData();
    } catch (err) {
      console.log(`error comes while getting languages : ${err}`);
      setLoading(false);
    }
  }, []);
  return { repoData, languagesData, loading };
};

export default useReposData;


// {
//   "JavaScript": 74869,
//   "HTML": 1333,
//   "TypeScript": 125
// }
