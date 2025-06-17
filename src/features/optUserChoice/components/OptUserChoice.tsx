import type { FC } from "react";
import OptUserChoiceHeader from "./fragments/OptUserChoiceHeader";

const OptUserChoice: FC = () => {
  return (
    <div className="w-full grid grid-cols-1 max-w-fit">
      <OptUserChoiceHeader />
    </div>
  );
};

export default OptUserChoice;
