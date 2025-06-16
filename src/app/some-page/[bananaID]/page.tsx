import { notFound } from "next/navigation";
import type { FC } from "react";

type PropsType = {
  params: {
    bananaID: string;
  };
};

const BananaPage: FC<PropsType> = async ({ params }) => {
  const { bananaID } = await params;

  console.log(bananaID);

  return +bananaID !== 5 ? notFound() : <div>{bananaID}</div>;
};

export default BananaPage;
