import { notFound } from "next/navigation";
import type { FC } from "react";

type PropsType = {
  params: Promise<{
    bananaID: string;
  }>;
};

const BananaPage: FC<PropsType> = async ({ params }) => {
  console.log(typeof params);

  const { bananaID } = await params;

  console.log(process.env.BANANAS_SUPPLY__SERVER);

  return +bananaID !== 5 ? notFound() : <div>{bananaID}</div>;
};

export default BananaPage;
