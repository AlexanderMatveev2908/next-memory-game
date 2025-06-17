"use client";

import { resp } from "@/core/lib/style";
import styled from "styled-components";

export const BtnChoiceStyled = styled.div`
  cursor: pointer;
  background: var(--green_app);
  width: 131px;
  height: 40px;
  border-radius: 26px;

  span {
    color: var(--white_1);
    font-size: var(--h__sm);
    font-weight: 700;
  }

  ${resp("md")} {
    width: 252px;
    height: 52px;
  }
`;
