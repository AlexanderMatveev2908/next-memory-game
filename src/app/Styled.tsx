"use client";

import { resp } from "@/core/lib/style";
import styled from "styled-components";

export const HomeStyled = styled.div`
  background: var(--green__3);

  .cont {
    gap: 48px;
    width: 327px;
    height: 418px;
  }
  ${resp("md")} {
    .cont {
      gap: 80px;
      width: 654px;
      height: 600px;
    }
  }
`;
