"use client";

import { resp } from "@/core/lib/style";
import styled from "styled-components";

export const RowChoiceUserStyled = styled.div`
  gap: 8px;

  .label {
    font-size: var(--h__xs);
    font-weight: 700;
    color: var(--green_4);
  }

  .row_btns {
    gap: 8px;
  }

  ${resp("md")} {
    gap: 16px;

    .label {
      font-size: var(--h__md);
    }

    .row_btns {
      gap: 32px;
    }
  }
`;
