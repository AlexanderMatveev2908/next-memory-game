"use client";

import { useRouter } from "next/navigation";
import { useEffect, type FC } from "react";

const NotFound: FC = () => {
  const nav = useRouter();

  useEffect(() => {
    nav.replace("/");
  }, [nav]);
  //   useEffect(() => {
  //   throw new Error("page not exist");
  // }, []);

  return <div>page not exist</div>;
};

export default NotFound;
