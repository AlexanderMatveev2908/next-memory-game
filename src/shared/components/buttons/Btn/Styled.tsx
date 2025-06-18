"use client";

import { resp } from "@/core/lib/style";
import styled from "styled-components";
import { PropsTypeBtnChoice } from "./Btn";

export const BtnStyled = styled.button<Omit<PropsTypeBtnChoice, "label">>`
  cursor: pointer;
  background: ${({ $bg }) => $bg ?? "var(--green__app)"};
  border-radius: 26px;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  &:enabled:hover {
    opacity: ${({ $hoverOpc }) => $hoverOpc ?? 1};
    background: ${({ $hoverBg, $bg }) => $hoverBg ?? $bg};
  }

  span {
    color: ${({ $clrTxt }) => $clrTxt ?? "var(--white__1)"};
    font-size: ${({ $fsz }) => $fsz ?? "var(--btn__xs)"};
    font-weight: 700;
  }

  ${resp("md")} {
    border-radius: 40px;
    span {
      font-size: ${({ $fsz_md, $fsz }) => $fsz_md ?? $fsz};
    }
  }
`;
