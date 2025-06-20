import { useDispatch, useSelector } from "react-redux";
import { gameSlice, getGameState } from "../slices/gameSlice";
import { cpyObj } from "@/core/lib/dataStructure";
import { handleRestartGame } from "../lib/game";
import { saveStorage } from "@/core/lib/storage";
import { gamePopSlice } from "../slices/gamePopSlice";
import { mobilePopSlice } from "../slices/mobilePopSlice";
import { useMobile } from "@/core/hooks/useMobile";

export const useRestart = () => {
  const gameState = useSelector(getGameState);
  const dispatch = useDispatch();

  const { isMobile } = useMobile();

  const handleRestart = () => {
    dispatch(gameSlice.actions.restartGame());

    const cpy = cpyObj(gameState);
    const updated = handleRestartGame(cpy, true);
    saveStorage("game", updated);

    if (isMobile) dispatch(mobilePopSlice.actions.setIsPop(false));

    dispatch(gamePopSlice.actions.setPop(false));
  };

  return {
    handleRestart,
  };
};
