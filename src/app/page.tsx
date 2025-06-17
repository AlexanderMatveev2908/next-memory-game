import type { FC } from "react";
import { HomeStyled } from "./Styled";
import OptGame from "@/app/components/Home/OptGame";

const Home: FC = () => {
  return (
    <HomeStyled className="h-full min-h-screen w-full grid grid-cols-1 justify-items-center items-center">
      <OptGame />
    </HomeStyled>
  );
};

export default Home;
