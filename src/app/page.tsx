import type { FC } from "react";
import s from "./page.module.css";

const Home: FC = () => {
  return (
    <div className={`${s.page}`}>
      <span className="txt__3">Home</span>
    </div>
  );
};

export default Home;
