import React from "react";
import useData from "../hooks/useData";
import SkeletonUse from "./skeleton";
import useReposData from "../hooks/useReposData";

const AboutMe = () => {
  const { data, loading } = useData();
  
  if (loading) {
    return <SkeletonUse />;
  }

  return (
    <div className="flex justify-between">
      <div className="m-5 w-[50rem]">
        <div className="text-gray-500 text-3xl">I'm</div>
        <div className="text-6xl my-5">{data.name}</div>
        <div className="text-lg text-gray-500">{data.bio}</div>
      </div>
      <div>
        <a href={data.html_url}>
          <img
            className="h-80 border-sky-500 m-5 border-8 rounded-full"
            src={data.avatar_url}
          />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
