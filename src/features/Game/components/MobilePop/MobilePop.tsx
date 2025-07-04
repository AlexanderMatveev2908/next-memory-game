"use client";

import { useMemo, type FC } from "react";
import { MobilePopStyled } from "./Styled";
import { useDispatch, useSelector } from "react-redux";
import WrapPop from "@/shared/components/wrappers/WrapPop/WrapPop";
import { getMobilePopState, mobilePopSlice } from "../../slices/mobilePopSlice";
import { useNewGame } from "../../hooks/useNewGame";
import { mobileBtns } from "../../uiFactory";
import Btn from "@/shared/components/buttons/Btn/Btn";
import { useRestart } from "../../hooks/useRestart";

const MobilePop: FC = () => {
  const popState = useSelector(getMobilePopState);

  const dispatch = useDispatch();

  const { startNewGame } = useNewGame();
  const { handleRestart } = useRestart();

  const handlers = useMemo(
    () => ({
      restart: handleRestart,
      newGame: startNewGame,
      resumeGame: () => {
        dispatch(mobilePopSlice.actions.setIsPop(false));
      },
    }),
    [dispatch, startNewGame, handleRestart]
  );

  return (
    <WrapPop {...{ isChildPop: popState.isOpen }}>
      <MobilePopStyled className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-1 gap-[16px]">
        {mobileBtns.map((el) => (
          <div key={el.id} className="w-full flex h-[48px]">
            <Btn
              {...{
                label: el.label,
                $fsz: "var(--h__md)",
                $bg: el.$bg,
                $clrTxt: el.$clrTxt,
                handleClick: handlers[el.handler as keyof typeof handlers],
              }}
            />
          </div>
        ))}
      </MobilePopStyled>
      ;
    </WrapPop>
  );
};

export default MobilePop;
