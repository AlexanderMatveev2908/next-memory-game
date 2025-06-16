"use client";
import type { FC } from "react";

type PropsType = {
  error: Error;
};

const Error: FC<PropsType> = ({ error }) => {
  return <div className="">{error?.message}</div>;
};

export default Error;
