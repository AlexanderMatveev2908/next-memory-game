import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameSlice, getGameState } from "../slices/gameSlice";
import { clearT } from "@/core/lib/etc";
import { cpyObj } from "@/core/lib/dataStructure";
import { handleFlipBack } from "../lib/game";
import { saveStorage } from "@/core/lib/storage";

export const useFlipBack = () => {
  const timerID = useRef<NodeJS.Timeout | null>(null);

  const gameState = useSelector(getGameState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!gameState.flipBack) return;

    timerID.current = setTimeout(() => {
      const cpy = cpyObj(gameState);
      const updated = handleFlipBack(cpy, true);
      saveStorage("game", updated);

      dispatch(gameSlice.actions.resetCurrFlipped());

      clearT(timerID);
    }, 1000);

    return () => {
      clearT(timerID);
    };
  }, [gameState, dispatch]);
};
