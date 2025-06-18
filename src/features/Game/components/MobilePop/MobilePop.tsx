"use client";

import type { FC } from "react";
import { MobilePopStyled } from "./Styled";
import { useSelector } from "react-redux";
import WrapPop from "@/shared/components/wrappers/WrapPop/WrapPop";
import { getMobilePopState } from "../../slices/mobilePopSlice";

type PropsType = {};

const MobilePop: FC<PropsType> = ({}) => {
  const popState = useSelector(getMobilePopState);

  return (
    <WrapPop {...{ isChildPop: popState.isOpen }}>
      <MobilePopStyled></MobilePopStyled>;
    </WrapPop>
  );
};

export default MobilePop;
