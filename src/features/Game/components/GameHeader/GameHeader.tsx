"use client";

import { useEffect, useState, type FC } from "react";
import { GameHeaderStyled } from "./Styled";
import Txt from "@/shared/components/Txt/Txt";
import Btn from "@/shared/components/buttons/Btn/Btn";
import { useDispatch } from "react-redux";
import { mobilePopSlice } from "../../slices/mobilePopSlice";
import { getIsMobile } from "@/core/lib/style";
import ClientWrap from "@/shared/components/wrappers/ClientWrap/Hydrated";
import { isClient } from "@/core/lib/etc";
import { useNewGame } from "../../hooks/useNewGame";

const GameHeader: FC = () => {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    if (!isClient()) return;
    const listen = () => setIsMobile(getIsMobile());

    window.addEventListener("resize", listen);

    return () => {
      window.removeEventListener("resize", getIsMobile);
    };
  }, []);

  const { startNewGame } = useNewGame();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(mobilePopSlice.actions.setIsPop(true));
  };

  return (
    <ClientWrap>
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
    </ClientWrap>
  );
};

export default GameHeader;
