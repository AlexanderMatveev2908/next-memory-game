"use client";

import { useEffect, useState, type FC } from "react";
import { PacmanLoader } from "react-spinners";

type PropsType = {
  children: React.ReactNode;
};

const WrapClient: FC<PropsType> = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {isHydrated ? (
        children
      ) : (
        <div className="w-full flex justify-center h-full items-center min-h-screen bg-[var(--white__1)]">
          <PacmanLoader {...{ size: 40, color: "var(--green__app)" }} />
        </div>
      )}
    </>
  );
};

export default WrapClient;
