"use client";
import { GamePad } from "@/shared/SVGs";
import type { FC } from "react";

const Page: FC = () => {
  console.log(process.env.NEXT_PUBLIC_BANANAS_SUPPLY__CLIENT);

  return (
    <div className="">
      <GamePad
        className="w-[350px] h-[350px] "
        {...{ fill: "gray", stroke: "blue" }}
      />
    </div>
  );
};

export default Page;
