"use client";

import { useRouter } from "next/navigation";
import { useEffect, type FC } from "react";

const NotFound: FC = () => {
  const nav = useRouter();

  useEffect(() => {
    nav.replace("/");
  }, [nav]);

  return <div>page not exist</div>;
};

export default NotFound;
