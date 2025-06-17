import type { FC } from "react";
import OptUserChoice from "@/features/optUserChoice/components/OptUserChoice";
import { HomeStyled } from "./HomeStyled";

const Home: FC = () => {
  return (
    <HomeStyled className="h-full min-h-screen w-full grid grid-cols-1 justify-items-center items-center">
      <OptUserChoice />
    </HomeStyled>
  );
};

export default Home;
