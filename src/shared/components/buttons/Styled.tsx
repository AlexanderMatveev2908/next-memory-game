"use client";

import { resp } from "@/core/lib/style";
import styled from "styled-components";

export const BtnStyled = styled.div`
  cursor: pointer;
  background: var(--green_app);
  border-radius: 26px;

  span {
    color: var(--white_1);
    font-size: var(--h__sm);
    font-weight: 700;
    padding: 10.5px 35px;
  }

  ${resp("md")} {
    border-radius: 40px;
    span {
      font-size: var(--btn__md);
      padding: 9.5px 72.5px;
    }
  }
`;
