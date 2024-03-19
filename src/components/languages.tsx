import useReposData from "../hooks/useReposData";
import { LinearProgress } from "@mui/material";
import SkeletonUse from "./skeleton";

function calculateTotalSize(languageSizes: any) {
  let totalSize = 0;
  for (const size in languageSizes) {
    totalSize += languageSizes[size];
  }
  return totalSize;
}

function calculatePercentages(languageSizes: any, totalSize: number) {
  const percentages = {};
  for (const language in languageSizes) {
    const size = languageSizes[language];
    if (totalSize > 0) {
      percentages[language] = (size / totalSize) * 100;
    } else {
      percentages[language] = 0; // Handle cases where total size is 0
    }
  }
  return percentages;
}


const Languages = () => {
  const { langLoading, languagesData } = useReposData();

  if (langLoading) {
    return (
      <>
        <SkeletonUse />
      </>
    )
  }

  const totalSize = calculateTotalSize(languagesData);
  const langObject = calculatePercentages(languagesData, totalSize);


  return (
    <>
      {Object.entries(langObject).map(
        ([language, percentage]) =>
          <LinearProgress
            variant="determinate" value={percentage}
            className="m-5"
          />
      )}
    </>
  );
};

export default Languages;
