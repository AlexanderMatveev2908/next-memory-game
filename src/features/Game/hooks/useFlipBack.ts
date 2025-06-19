import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameSlice, getGameState } from "../slices/gameSlice";
import { clearT } from "@/core/lib/etc";
import { flipBackStorage } from "../lib/game";

export const useFlipBack = () => {
  const timerID = useRef<NodeJS.Timeout | null>(null);

  const gameState = useSelector(getGameState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!gameState.flipBack) return;

    timerID.current = setTimeout(() => {
      dispatch(gameSlice.actions.resetCurrFlipped());
      flipBackStorage(gameState);

      clearT(timerID);
    }, 1000);

    return () => {
      clearT(timerID);
    };
  }, [gameState, dispatch]);
};
