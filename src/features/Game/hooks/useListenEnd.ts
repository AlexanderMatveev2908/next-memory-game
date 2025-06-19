import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameState } from "../slices/gameSlice";
import { isArrOK } from "@/core/lib/dataStructure";
import { gamePopSlice } from "../slices/gamePopSlice";

export const useListenEnd = () => {
  const gameState = useSelector(getGameState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isArrOK(gameState.gameBoard)) return;
    if (!gameState.gameBoard!.every((cell) => cell.type === "matched")) return;

    dispatch(gamePopSlice.actions.setPop(true));
  }, [dispatch, gameState.gameBoard]);
};
