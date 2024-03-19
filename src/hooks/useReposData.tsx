import axios from "axios";
import React, { useEffect, useState } from "react";

const token = import.meta.env.VITE_API_KEY;

interface UserLanguages {
  [key: string]: number;
}

const useReposData = () => {
  const [repoData, setRepoData] = useState([]);
  const [languagesData, setLanguagesData] = useState({});
  const [langLoading, setLangLoading] = useState(true);

  const fetchingData = async () => {
    try {
      const responseData = await axios.get(
        "https://api.github.com/users/sudhanshu042004/repos",
        { headers: { Authorization: `token ${token}` } },
      );
      const fetchedData = responseData.data;
      setRepoData(fetchedData);
      const userLanguages: UserLanguages = {};

      for (const repo of fetchedData) {
        const repoName = repo.name;

        if (repo.fork) {
          continue;
        }
        const languagesResponse = await axios.get(
          `https://api.github.com/repos/sudhanshu042004/${repoName}/languages`,
          { headers: { Authorization: `token ${token}` } },
        );
        const languages: UserLanguages = languagesResponse.data;
        for (const [language, bytesCount] of Object.entries(languages)) {
          const count: number = bytesCount;
          userLanguages[language] = (userLanguages[language] || 0) + count;
        }
        setLanguagesData(userLanguages);
        
      }
    } catch (err) {
      console.log(`err comes up while fetching languagesData : ${err}`);
    } finally {
      setLangLoading(false);
    }
  };

  useEffect(() => {
    try {
      fetchingData();
      
    } catch (err) {
      console.log(`error comes while getting languages : ${err}`);
      setLangLoading(false);
    }
  }, []);
  return { repoData, languagesData, langLoading };
};

export default useReposData;

// {
//   "JavaScript": 74869,
//   "HTML": 1333,
//   "TypeScript": 125
// }
