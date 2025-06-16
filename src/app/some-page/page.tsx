"use client";
import type { FC } from "react";

const Page: FC = () => {
  console.log(process.env.NEXT_PUBLIC_BANANAS_SUPPLY__CLIENT);

  return <div className="text-red-600">some page</div>;
};

export default Page;
