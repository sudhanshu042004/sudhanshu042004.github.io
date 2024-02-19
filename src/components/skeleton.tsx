import React from "react";
import Skeleton from "@mui/material/Skeleton";

const SkeletonUse = () => {
  return (
    <div>
      <Skeleton
        variant="circular"
        sx={{ backgroundColor: "#18181b" }}
        width={320}
        height={320}
      />
    </div>
  );
};

export default SkeletonUse;
