"use client";

import type { FC } from "react";
import { GameHeaderStyled } from "./Styled";
import Txt from "@/shared/components/Txt/Txt";
import Btn from "@/shared/components/buttons/Btn/Btn";
import { useDispatch } from "react-redux";
import { mobilePopSlice } from "../../slices/mobilePopSlice";

const GameHeader: FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(mobilePopSlice.actions.setIsPop(true));
  };

  return (
    <GameHeaderStyled className="fixed flex justify-between">
      <Txt
        {...{
          txt: "memory",
          $clr: "var(--green__3)",
          $fsz: "var(--btn__md)",
          $fsz_md: "var(--h__lg)",
        }}
      />

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
    </GameHeaderStyled>
  );
};

export default GameHeader;
