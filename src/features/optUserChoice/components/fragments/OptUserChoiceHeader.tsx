import type { FC } from "react";
import s from "./OptUserChoiceHeader.module.css";

const OptUserChoiceHeader: FC = () => {
  return (
    <div className="w-full flex justify-center">
      <span className={`${s.header} txt_clr__white_1`}>memory</span>
    </div>
  );
};

export default OptUserChoiceHeader;
