import { delStorage } from "@/core/lib/storage";
import { useCallback } from "react";
import { mobilePopSlice } from "../slices/mobilePopSlice";
import { gameSlice } from "../slices/gameSlice";
import { optGameSlice } from "@/features/OptGame/slices/optGameSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export const useNewGame = () => {
  const nav = useRouter();
  const dispatch = useDispatch();

  const startNewGame = useCallback(() => {
    dispatch(optGameSlice.actions.resetOpt());
    delStorage("optGame");

    dispatch(gameSlice.actions.resetGame());
    delStorage("game");

    dispatch(mobilePopSlice.actions.setIsPop(false));

    nav.replace("/");
  }, [nav, dispatch]);

  return {
    startNewGame,
  };
};
