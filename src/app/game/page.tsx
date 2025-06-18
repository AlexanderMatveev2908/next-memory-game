import type { FC } from "react";
import { GameStyled } from "./Styled";
import GameHeader from "@/features/Game/components/GameHeader/GameHeader";

const Game: FC = () => {
  return (
    <GameStyled className="w-full grid grid-cols-1 justify-items-center items-center">
      <GameHeader />
    </GameStyled>
  );
};
export default Game;
