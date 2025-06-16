"use client";
import { GamePad } from "@/shared/SVGs";
import type { FC } from "react";

const Page: FC = () => {
  console.log(process.env.NEXT_PUBLIC_BANANAS_SUPPLY__CLIENT);

  return (
    <div className="">
      <GamePad
        className="w-[100px] h-[100px]"
        {...{ fill: "red", stroke: "blue" }}
      />
    </div>
  );
};

export default Page;
