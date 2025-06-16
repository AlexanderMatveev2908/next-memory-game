import type { FC } from "react";
import s from "./page.module.css";
import OptUserChoice from "@/features/optUserChoice/components/OptUserChoice";

const Home: FC = () => {
  return (
    <div className={`${s.page}`}>
      <OptUserChoice />
    </div>
  );
};

export default Home;
