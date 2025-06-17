"use client";

import { resp } from "@/core/lib/style";
import styled from "styled-components";
import { PropsTypeBtnChoice } from "./Btn";

export const BtnStyled = styled.div<Omit<PropsTypeBtnChoice, "label">>`
  cursor: pointer;
  background: var(--green_app);
  border-radius: 26px;

  span {
    color: var(--white_1);
    font-size: ${({ $fsz }) => $fsz ?? "var(--btn__xs)"};
    font-weight: 700;
    padding: 10.5px 35px;
  }

  ${resp("md")} {
    border-radius: 40px;
    span {
      font-size: ${({ $fsz_md }) => $fsz_md ?? "var(--btn__md)"};
      padding: 9.5px 72.5px;
    }
  }
`;
