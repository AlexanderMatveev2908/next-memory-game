"use client";

import { type FC } from "react";
import { GameHeaderStyled } from "./Styled";
import Txt from "@/shared/components/Txt/Txt";
import Btn from "@/shared/components/buttons/Btn/Btn";
import { useDispatch } from "react-redux";
import { mobilePopSlice } from "../../slices/mobilePopSlice";
import WrapClient from "@/shared/components/wrappers/WrapClient/WrapClient";
import { useNewGame } from "../../hooks/useNewGame";
import { useMobile } from "@/core/hooks/useMobile";

const GameHeader: FC = () => {
  const { isMobile } = useMobile();

  const { startNewGame } = useNewGame();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(mobilePopSlice.actions.setIsPop(true));
  };

  return (
    <WrapClient>
      <GameHeaderStyled className="fixed flex justify-between">
        <Txt
          {...{
            txt: "memory",
            $clr: "var(--green__3)",
            $fsz: "var(--btn__md)",
            $fsz_md: "var(--h__lg)",
          }}
        />

        {isMobile ? (
          <div className="flex w-fit">
            <Btn
              {...{
                label: "Menu",
                $bg: "var(--green__app)",
                $fsz: "var(--h__xs)",
                $clrTxt: "var(--white__1)",
                $pad: "10px 18px",
                handleClick,
              }}
            />
          </div>
        ) : (
          <div className="flex w-full max-w-fit gap-[16px]">
            <div className="flex min-w-[127px] h-[52px]">
              <Btn
                {...{
                  label: "Restart",
                  $bg: "var(--green__app)",
                  $clrTxt: "var(--white__1)",
                  $fsz: "var(--btn__md)",
                  $pad: "10px 40px",
                  handleClick: () => console.log("TODO ☢️"),
                }}
              />
            </div>

            <div className="flex min-w-[150px] h-[52px]">
              <Btn
                {...{
                  label: "New Game",
                  $bg: "var(--green__0)",
                  $clrTxt: "var(--green__3)",
                  $fsz: "var(--btn__md)",
                  $pad: "10px 25px",
                  handleClick: startNewGame,
                }}
              />
            </div>
          </div>
        )}
      </GameHeaderStyled>
    </WrapClient>
  );
};

export default GameHeader;
